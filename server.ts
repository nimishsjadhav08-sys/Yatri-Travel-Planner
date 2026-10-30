import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import { SAMPLE_ITINERARIES } from './src/data/sampleItineraries';
import { generateStructuredItinerary } from './src/data/dynamicGenerator';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini client on server-side
  let ai: GoogleGenAI | null = null;
  const rawGeminiKey = (process.env.GEMINI_API_KEY || '').trim();
  const isValidGeminiKey = rawGeminiKey.length > 10 && rawGeminiKey !== 'MY_GEMINI_API_KEY';

  if (isValidGeminiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey: rawGeminiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
      console.log('Gemini AI client successfully initialized with active API key.');
    } catch (err) {
      console.error('Failed to initialize Gemini AI client:', err);
      ai = null;
    }
  } else {
    console.log('Gemini API key not set or is placeholder. Using curated Indian planner engine.');
  }

  // API Route: Configuration status
  app.get('/api/config', (req, res) => {
    const rawKey = (process.env.GEMINI_API_KEY || '').trim();
    const hasGemini = rawKey.length > 10 && rawKey !== 'MY_GEMINI_API_KEY';
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY || process.env.VITE_GOOGLE_MAPS_API_KEY || '';
    res.json({
      geminiActive: hasGemini,
      hasMapsKey: Boolean(mapsKey && mapsKey !== 'MY_GOOGLE_MAPS_API_KEY')
    });
  });

  // API Route: Generate Travel Itinerary
  app.post('/api/generate-itinerary', async (req, res) => {
    const { city, daysCount = 3, vibe = 'Balanced & Authentic', pace = 'Moderate', travelerType = 'Explorer' } = req.body;

    if (!city || typeof city !== 'string' || city.trim().length === 0) {
      return res.status(400).json({ error: 'City name is required' });
    }

    const trimmedCity = city.trim();
    const normalizedCity = trimmedCity.toLowerCase();
    const clampedDays = Math.max(1, Math.min(10, Number(daysCount) || 3));

    // Check if we have an instant curated sample
    if (SAMPLE_ITINERARIES[normalizedCity] && (!ai || !req.body.vibe)) {
      const sample = SAMPLE_ITINERARIES[normalizedCity];
      return res.json({
        itinerary: {
          ...sample,
          days: sample.days.slice(0, clampedDays)
        },
        source: 'curated_sample'
      });
    }

    // If Gemini client is available, generate with gemini-3.8-flash
    if (ai) {
      try {
        const dayLabels = Array.from({ length: clampedDays }, (_, i) => `Day ${i + 1}`).join(', ');
        const prompt = `Create a realistic, highly specific, geographically sensible ${clampedDays}-day travel itinerary for: "${trimmedCity}" (India travel focus).
Travel style/vibe: ${vibe}. Pace: ${pace}. Traveler: ${travelerType}.

CRITICAL DESTINATION & MAP ACCURACY RULES:
1. STRICT LOCATION INTEGRITY: Every attraction, temple, beach, monument, cafe, and market MUST be strictly situated within "${trimmedCity}, India". Do NOT invent or include places from other cities, states, or countries.
2. MAP-PIN ACCURACY: In every activity's "location" property, write the EXACT physical landmark and neighborhood (e.g., in Mumbai: "Gateway of India, Colaba, Mumbai", "Chhatrapati Shivaji Maharaj Terminus, Fort, Mumbai", "Marine Drive Promenade, Churchgate, Mumbai", "Elephanta Caves, Gharapuri Island, Mumbai"). DO NOT use generic phrases like "City center" or "Central street".
3. GEOGRAPHIC NEIGHBORHOOD CLUSTERING: Group each day's activities in the same geographic quadrant to avoid severe traffic and backtracking (e.g. Day 1 South Mumbai/Colaba, Day 2 Bandra/Worli, Day 3 Suburban beaches/island caves).
4. SCHEDULE: Exactly ${clampedDays} distinct days: ${dayLabels}. 4 to 5 timed items per day (morning, lunch, afternoon, evening/sunset).
5. LOCAL CONTEXT: Pricing in Indian Rupees (₹ / INR), local transit tips (local train lines, auto-rickshaws, metros, cabs), 4 packing essentials, and 3 iconic authentic regional dishes with specific iconic spots/restaurants where to try them.
`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            systemInstruction: `You are an elite travel curator specializing in Incredible India journeys. You craft hyper-accurate, geographically optimized ${clampedDays}-day itineraries with authentic real-world venue names, historic institutions, local eateries (thalis, street chaat, legendary dhabas), transit tips, and genuine cultural etiquette. All locations MUST strictly belong to ${trimmedCity}, India.`,
            temperature: 0.7,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                cityName: { type: Type.STRING },
                country: { type: Type.STRING },
                tagline: { type: Type.STRING },
                overview: { type: Type.STRING },
                bestTimeToVisit: { type: Type.STRING },
                localCurrency: { type: Type.STRING },
                language: { type: Type.STRING },
                transitTip: { type: Type.STRING },
                dailyBudgetEst: { type: Type.STRING },
                days: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      dayNumber: { type: Type.INTEGER },
                      title: { type: Type.STRING },
                      theme: { type: Type.STRING },
                      dayHighlight: { type: Type.STRING },
                      recommendedNeighborhood: { type: Type.STRING },
                      schedule: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.OBJECT,
                          properties: {
                            id: { type: Type.STRING },
                            time: { type: Type.STRING },
                            timeOfDay: { type: Type.STRING },
                            activity: { type: Type.STRING },
                            description: { type: Type.STRING },
                            location: { type: Type.STRING },
                            category: { type: Type.STRING },
                            duration: { type: Type.STRING },
                            costEstimate: { type: Type.STRING },
                            insiderTip: { type: Type.STRING }
                          },
                          required: [
                            'time', 'timeOfDay', 'activity', 'description',
                            'location', 'category', 'duration', 'costEstimate', 'insiderTip'
                          ]
                        }
                      }
                    },
                    required: ['dayNumber', 'title', 'theme', 'dayHighlight', 'recommendedNeighborhood', 'schedule']
                  }
                },
                packingEssentials: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                culinaryHighlights: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      description: { type: Type.STRING },
                      whereToTry: { type: Type.STRING }
                    },
                    required: ['name', 'description', 'whereToTry']
                  }
                },
                practicalTips: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: [
                'cityName', 'country', 'tagline', 'overview', 'bestTimeToVisit',
                'localCurrency', 'language', 'transitTip', 'dailyBudgetEst',
                'days', 'packingEssentials', 'culinaryHighlights', 'practicalTips'
              ]
            }
          }
        });

        const responseText = response.text;
        if (responseText) {
          const parsedData = JSON.parse(responseText);

          const fullItinerary = {
            ...parsedData,
            id: `itinerary-${Date.now()}`,
            vibe,
            pace,
            createdAt: new Date().toISOString(),
            days: (parsedData.days || []).map((day: any, dIdx: number) => ({
              ...day,
              dayNumber: day.dayNumber || (dIdx + 1),
              schedule: (day.schedule || []).map((act: any, aIdx: number) => ({
                ...act,
                id: act.id || `act-${dIdx + 1}-${aIdx + 1}`
              }))
            }))
          };

          return res.json({
            itinerary: fullItinerary,
            source: 'gemini'
          });
        }
      } catch (geminiError: any) {
        console.warn('Gemini generation encountered an error, falling back to dynamic generator:', geminiError?.message);
      }
    }

    // Dynamic generator fallback
    const fallbackItinerary = generateStructuredItinerary(trimmedCity, vibe, pace, clampedDays);
    return res.json({
      itinerary: fallbackItinerary,
      source: 'dynamic_engine'
    });
  });

  // Sample itineraries route
  app.get('/api/samples/:city', (req, res) => {
    const cityKey = req.params.city.toLowerCase();
    const daysCount = Math.max(1, Math.min(10, Number(req.query.days) || 3));
    if (SAMPLE_ITINERARIES[cityKey]) {
      const sample = SAMPLE_ITINERARIES[cityKey];
      return res.json({
        ...sample,
        days: sample.days.slice(0, daysCount)
      });
    }
    const generated = generateStructuredItinerary(cityKey, 'Balanced & Authentic', 'Moderate', daysCount);
    return res.json(generated);
  });

  // Setup Vite dev server or static production files
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Yatri (यात्री) server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
