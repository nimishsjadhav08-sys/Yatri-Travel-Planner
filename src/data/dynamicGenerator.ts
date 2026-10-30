import { Itinerary } from '../types';

interface CityProfile {
  country: string;
  tagline: string;
  overview: string;
  currency: string;
  language: string;
  bestTime: string;
  transit: string;
  budget: string;
  days: {
    title: string;
    theme: string;
    highlight: string;
    hub: string;
    activities: {
      time: string;
      timeOfDay: 'morning' | 'afternoon' | 'evening';
      activity: string;
      desc: string;
      location: string;
      category: 'culture' | 'sightseeing' | 'food' | 'nature' | 'shopping' | 'relaxation';
      duration: string;
      cost: string;
      tip: string;
    }[];
  }[];
  culinary: { name: string; desc: string; spot: string }[];
  packing: string[];
  tips: string[];
}

const CITY_DATABASE: Record<string, CityProfile> = {
  tokyo: {
    country: 'Japan',
    tagline: 'Futuristic Skyscrapers, Shinto Shrines & World-Class Culinary Craft',
    overview: 'Tokyo is an electrifying fusion of hyper-modern neon districts, serene wooded shrines, artisan coffee nooks, and unparalleled train infrastructure. This 3-day plan clusters Western, Central, and Eastern districts.',
    currency: 'Japanese Yen (¥ / JPY)',
    language: 'Japanese',
    bestTime: 'October–November (crisp autumn) or March–April (cherry blossoms)',
    transit: 'Pasmo or Suica card for seamless travel on JR Yamanote line and Tokyo Metro.',
    budget: '$70 – $150 USD / day',
    days: [
      {
        title: 'Shibuya Scramble, Meiji Jingu & Harajuku Culture',
        theme: 'Subcultures, Sacred Woods & Iconic Crossings',
        highlight: 'Meiji Jingu early morning cedar forest serenity',
        hub: 'Shibuya & Harajuku',
        activities: [
          {
            time: '08:30 AM – 10:30 AM',
            timeOfDay: 'morning',
            activity: 'Meiji Jingu Shrine & Forest Walk',
            desc: 'Pass through the gigantic cypress torii gates into a tranquil 170-acre forest planted with 100,000 trees from across Japan.',
            location: 'Yoyogi Park, Shibuya',
            category: 'culture',
            duration: '2 hours',
            cost: 'Free entry',
            tip: 'Write a wooden ema prayer plaque at the central courtyard.'
          },
          {
            time: '11:00 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: 'Takeshita Street & Omotesando Architecture',
            desc: 'Contrast colorful kawaii boutiques on Takeshita Street with high-design flagship architecture and specialty coffee along tree-lined Omotesando boulevard.',
            location: 'Harajuku & Omotesando',
            category: 'shopping',
            duration: '2 hours',
            cost: 'Free browsing',
            tip: 'Stop at Koffee Mameya for single-origin espresso tastings.'
          },
          {
            time: '01:15 PM – 02:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Tonkatsu or Ramen Lunch in Shibuya',
            desc: 'Savor crispy breaded kurobuta pork cutlet with shredded cabbage and roasted sesame sauce, or rich tonkotsu ramen.',
            location: 'Shibuya Dogenzaka',
            category: 'food',
            duration: '1.25 hours',
            cost: '¥1,500 – ¥2,500',
            tip: 'Use automated ticket vending machines at the entrance to order.'
          },
          {
            time: '03:00 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Shibuya Crossing & Shibuya Sky Observation Deck',
            desc: 'Experience the world’s busiest pedestrian intersection, then take the glass elevator to the 360-degree open-air rooftop observatory at Shibuya Scramble Square.',
            location: 'Shibuya Sky, Shibuya 2-chome',
            category: 'sightseeing',
            duration: '2.5 hours',
            cost: '¥2,200 (book online)',
            tip: 'Sunset slots sell out 4 weeks in advance; catch golden hour light over Mount Fuji on clear days.'
          },
          {
            time: '06:30 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: 'Izakaya Crawl in Nonbei Yokocho (Drunkard’s Alley)',
            desc: 'Squeeze into tiny 6-seat lantern-lit bars serving charcoal yakitori skewers, cold draft beer, and seasonal sake under the train tracks.',
            location: 'Shibuya 1-chome',
            category: 'food',
            duration: '3 hours',
            cost: '$30 – $50 USD',
            tip: 'Keep cash ready as these vintage micro-bars rarely accept cards.'
          }
        ]
      },
      {
        title: 'Historic Asakusa, Akihabara & Sumida River',
        theme: 'Edo Heritage, Electronics & River Vistas',
        highlight: 'Senso-ji’s towering red Kaminarimon Gate & incense burner',
        hub: 'Taito Ward & Asakusa',
        activities: [
          {
            time: '08:30 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: 'Senso-ji Temple & Nakamise-dori',
            desc: 'Tokyo’s oldest Buddhist temple founded in 628 AD. Walk through Nakamise shopping street sampling freshly grilled ningyo-yaki bean cakes.',
            location: 'Asakusa, Taito Ward',
            category: 'culture',
            duration: '2.5 hours',
            cost: 'Free entry',
            tip: 'Bathe in the fragrant smoke of the jokoro incense burner for good health.'
          },
          {
            time: '11:30 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: 'Kappabashi Kitchen Town & Knife Boutiques',
            desc: 'Explore the wholesale district dedicated to Japanese chef knives, cast iron teapots, and hyper-realistic wax food replicas.',
            location: 'Matsugaya, Taito Ward',
            category: 'shopping',
            duration: '1.5 hours',
            cost: 'Free browsing',
            tip: 'Kama-Asa and Union Commerce offer custom name-engraved Japanese kitchen knives.'
          },
          {
            time: '01:15 PM – 02:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Handmade Soba Lunch at Asakusa Namiki Yabusoba',
            desc: 'One of Tokyo’s venerated soba institutions dating to 1913, serving chilled buckwheat noodles with concentrated dashi-tsuyu broth.',
            location: 'Kaminarimon 2-chome',
            category: 'food',
            duration: '1.25 hours',
            cost: '¥1,800 – ¥2,800',
            tip: 'Finish by pouring hot sobayu (cooking broth) into your leftover dipping sauce to drink as soup.'
          },
          {
            time: '03:00 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Akihabara Electric Town & Retro Gaming',
            desc: 'Dive into multi-story arcades, vintage Famicom boutiques at Super Potato, and retro electronics stalls under the railway arches.',
            location: 'Sotokanda, Chiyoda Ward',
            category: 'culture',
            duration: '2.5 hours',
            cost: 'Free browsing',
            tip: 'Visit Mandarake Complex for rare vintage collectibles and manga art.'
          },
          {
            time: '06:30 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: 'Sumida River Walk & Craft Beer at Asahi Beer Hall',
            desc: 'Walk the riverfront deck overlooking the glowing Tokyo Skytree, then dine on wagyu sukiyaki or craft beer in Kuramae.',
            location: 'Kuramae & Asakusa Riverfront',
            category: 'food',
            duration: '3 hours',
            cost: '$35 – $60 USD',
            tip: 'Kuramae is Tokyo’s trendiest artisan district with hip microbreweries and chocolate factories.'
          }
        ]
      },
      {
        title: 'Tsukiji Outer Market, Ginza & teamLab Digital Art',
        theme: 'Gourmet Seafood, Modern Art & Night Skyline',
        highlight: 'Immersive infinite floral rooms at teamLab Planets',
        hub: 'Chuo & Koto Wards',
        activities: [
          {
            time: '08:00 AM – 10:30 AM',
            timeOfDay: 'morning',
            activity: 'Tsukiji Outer Market Seafood Breakfast',
            desc: 'Sample fresh sea urchin (uni), grilled tamagoyaki skewers, king crab legs, and fresh bluefin tuna sushi directly from market artisans.',
            location: 'Tsukiji 4-chome, Chuo Ward',
            category: 'food',
            duration: '2.5 hours',
            cost: '$20 – $40 USD',
            tip: 'Stand and eat at designated counter zones in accordance with local market etiquette.'
          },
          {
            time: '11:00 AM – 01:30 PM',
            timeOfDay: 'morning',
            activity: 'teamLab Planets Digital Art Museum',
            desc: 'Wade barefoot through knee-deep digital water with projection koi fish, and navigate the crystal universe of infinite LED mirrors.',
            location: 'Toyosu, Koto Ward',
            category: 'culture',
            duration: '2.5 hours',
            cost: '¥3,800 (~$25 USD)',
            tip: 'Wear pants that easily roll above knees as you walk through water installations.'
          },
          {
            time: '02:00 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Ginza Six Rooftop Garden & Stationary Emporiums',
            desc: 'Stroll Ginza’s elite shopping avenue, stopping at Itoya (12 floors of fine Japanese paper & pens) and relaxing on the greenery rooftop of Ginza Six.',
            location: 'Ginza, Chuo Ward',
            category: 'shopping',
            duration: '2.5 hours',
            cost: 'Free',
            tip: 'On weekends, Ginza’s main street is closed to vehicle traffic for pedestrian strolls.'
          },
          {
            time: '05:30 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: 'Omakase Sushi or Tempura Finale & Shinjuku Nightcap',
            desc: 'Celebrate your Tokyo finale with freshly fried seasonal tempura or counter omakase, followed by an evening cocktail in Shinjuku Golden Gai.',
            location: 'Ginza & Shinjuku',
            category: 'food',
            duration: '3 hours',
            cost: '$50 – $100 USD',
            tip: 'Bar Albatross in Omoide Yokocho or Bar Trench in Ebisu offer intimate cocktail craftsmanship.'
          }
        ]
      }
    ],
    culinary: [
      { name: 'Tsukemen (Dipping Ramen)', desc: 'Thick chewy noodles dipped into concentrated pork bone and dried bonito broth.', spot: 'Fuunji in Shinjuku or Rokurinsha in Tokyo Station' },
      { name: 'Edomae Sushi', desc: 'Fresh local nigiri brushed with sweet soy tare over warm seasoned sushi rice.', spot: 'Tsukiji Outer Market or Sushi Dai' },
      { name: 'Monjayaki', desc: 'Tokyo’s savory runny cabbage pancake cooked on an iron griddle with miniature metal spatulas.', spot: 'Tsukishima Monja Street' }
    ],
    packing: ['Comfortable slip-on shoes for temple floors', 'Pocket Wi-Fi or eSIM for navigating train stations', 'Coin pouch for ticket machines and vending', 'Hand towel (many public restrooms do not have paper towels)'],
    tips: ['Stand on the left side of escalators in Tokyo (walk on the right).', 'Eating or drinking while walking down the street is considered poor form.', 'Trains stop running around midnight; plan evening transit accordingly.']
  },
  paris: {
    country: 'France',
    tagline: 'Gothic Cathedrals, Impressionist Masterpieces & Haussmannian Cafés',
    overview: 'The City of Light unfolds across the Seine with grand stone architecture, quiet garden squares, and bohemian hilltop quarters. This 3-day itinerary pairs central landmarks with Saint-Germain and Montmartre.',
    currency: 'Euro (€ / EUR)',
    language: 'French (English widely spoken in museums & hotels)',
    bestTime: 'April–May (blooming gardens) or September–October (crisp autumn light)',
    transit: 'Navigo Easy card or contactless metro tickets for Métro and RER lines.',
    budget: '$80 – $170 USD / day',
    days: [
      {
        title: 'Historic Heart: Île de la Cité & Latin Quarter',
        theme: 'Medieval Origins, Gothic Stained Glass & Seine Quays',
        highlight: 'Sainte-Chapelle’s 15-meter soaring stained glass walls',
        hub: '1st & 4th Arrondissements',
        activities: [
          {
            time: '09:00 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: 'Sainte-Chapelle & Notre-Dame Forecourt',
            desc: 'Gaze up at the 13th-century radiant stained glass jewel box of Sainte-Chapelle, then walk to the restored cathedral of Notre-Dame on Île de la Cité.',
            location: 'Île de la Cité, 1st Arr.',
            category: 'culture',
            duration: '2 hours',
            cost: '€13 (reserve timed slot)',
            tip: 'Morning sunlight through the southern stained glass panels creates spectacular jewel tones.'
          },
          {
            time: '11:15 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: 'Bouquinistes along the Seine & Shakespeare and Company',
            desc: 'Browse green wooden riverside bookstalls for vintage postcards, followed by the legendary English-language bookstore Shakespeare and Company.',
            location: 'Quai de la Tournelle & Rue de la Bûcherie',
            category: 'culture',
            duration: '1.75 hours',
            cost: 'Free browsing',
            tip: 'Grab a flat white and lemon tart at Shakespeare and Co Café next door.'
          },
          {
            time: '01:15 PM – 02:45 PM',
            timeOfDay: 'afternoon',
            activity: 'Bistro Lunch on Rue Mouffetard',
            desc: 'Dine at an authentic Latin Quarter bistro on duck confit, beef bourguignon, and warm crusty baguette with salted butter.',
            location: 'Rue Mouffetard, 5th Arr.',
            category: 'food',
            duration: '1.5 hours',
            cost: '€20 – €35',
            tip: 'Look for "formule midi" (lunch fixed price menu) offering exceptional value.'
          },
          {
            time: '03:15 PM – 05:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Jardin du Luxembourg & Medici Fountain',
            desc: 'Sit on green metal chairs under chestnut trees watching miniature sailboats on the central grand basin, and admire the mossy 1630 Medici Fountain.',
            location: '6th Arrondissement',
            category: 'nature',
            duration: '2.25 hours',
            cost: 'Free entry',
            tip: 'Pick up macarons from Pierre Hermé on Rue Bonaparte beforehand to enjoy in the gardens.'
          },
          {
            time: '07:00 PM – 10:00 PM',
            timeOfDay: 'evening',
            activity: 'Sunset Seine River Cruise & Saint-Germain Wine Bar',
            desc: 'Glide past floodlit bridges and monuments aboard a riverboat, then unwind at a candlelit natural wine bar in Saint-Germain-des-Prés.',
            location: 'Pont Neuf & Saint-Germain',
            category: 'relaxation',
            duration: '3 hours',
            cost: '€16 cruise / €30 dinner',
            tip: 'Time your boat cruise so you pass the Eiffel Tower at the top of the hour for its 5-minute sparkle show.'
          }
        ]
      },
      {
        title: 'Louvre Treasures, Tuileries & Le Marais',
        theme: 'Royal Palaces, French Art & Fashionable Courtyards',
        highlight: 'Mona Lisa, Winged Victory and Venus de Milo at Musée du Louvre',
        hub: '1st & 3rd Arrondissements',
        activities: [
          {
            time: '09:00 AM – 12:30 PM',
            timeOfDay: 'morning',
            activity: 'Musée du Louvre Masterpieces',
            desc: 'Enter via the I.M. Pei glass pyramid to discover Greek antiquities, Italian Renaissance paintings, and Napoleon III’s lavish state apartments.',
            location: 'Rue de Rivoli',
            category: 'culture',
            duration: '3.5 hours',
            cost: '€22 (advance timed ticket essential)',
            tip: 'Enter via the Carrousel du Louvre underground entrance to bypass surface pyramid queues.'
          },
          {
            time: '12:45 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Lunch on Rue des Rosiers in Le Marais',
            desc: 'Walk into the historic Jewish Quarter of Le Marais for world-famous pita stuffed with crispy herbed falafel, roasted eggplant, and tahini.',
            location: 'Rue des Rosiers, 4th Arr.',
            category: 'food',
            duration: '1.25 hours',
            cost: '€10 – €16',
            tip: 'L’As du Fallafel is the gold standard; line moves fast even when it looks daunting.'
          },
          {
            time: '02:15 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Place des Vosges & Musée Carnavalet',
            desc: 'Admire Paris’s oldest planned royal square with symmetrical red brick facades and vaulted stone arcades, then visit the museum of Paris history.',
            location: 'Place des Vosges, 4th Arr.',
            category: 'sightseeing',
            duration: '2.25 hours',
            cost: 'Free entry to permanent collection',
            tip: 'Victor Hugo wrote much of Les Misérables on the second floor of Maison de Victor Hugo on the corner.'
          },
          {
            time: '05:00 PM – 06:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Café de Flore or Les Deux Magots Apéritif',
            desc: 'Take an outdoor wicker chair for people watching where Hemingway, Simone de Beauvoir, and Jean-Paul Sartre held intellectual salon debates.',
            location: 'Boulevard Saint-Germain',
            category: 'relaxation',
            duration: '1.5 hours',
            cost: '€8 – €15',
            tip: 'Order a kir royal or espresso and soak in Parisian sidewalk culture.'
          },
          {
            time: '07:30 PM – 10:30 PM',
            timeOfDay: 'evening',
            activity: 'Classic Neo-Bistro Dinner in Canal Saint-Martin',
            desc: 'Cross to Canal Saint-Martin for innovative market-driven French cooking, iron footbridges, and evening atmosphere.',
            location: '10th Arrondissement',
            category: 'food',
            duration: '3 hours',
            cost: '€35 – €60',
            tip: 'Le Verre Volé or Early June offer incredible seasonal small plates and biodynamic wines.'
          }
        ]
      },
      {
        title: 'Montmartre Cobblestones & Eiffel Tower Vistas',
        theme: 'Bohemian Artists, Hilltop Panoramas & Iconic Lights',
        highlight: 'Sunrise or sunset panorama from Sacré-Cœur steps overlooking Paris',
        hub: '18th & 7th Arrondissements',
        activities: [
          {
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: 'Montmartre Village & Sacré-Cœur Basilica',
            desc: 'Climb the historic cobblestone stairways of the artist quarter past Place du Tertre to the Romano-Byzantine white stone dome of Sacré-Cœur.',
            location: 'Butte Montmartre, 18th Arr.',
            category: 'sightseeing',
            duration: '2.5 hours',
            cost: 'Free entry (Dome climb €8)',
            tip: 'Wander down Rue de l’Abreuvoir to see La Maison Rose and the historic Montmartre vineyard.'
          },
          {
            time: '12:00 PM – 01:30 PM',
            timeOfDay: 'morning',
            activity: 'Crêpes & Galettes Lunch at Breizh Café',
            desc: 'Savor savory Brittany buckwheat galettes stuffed with Gruyère cheese, ham, egg, and artisan cider.',
            location: 'Rue Joseph de Maistre or Abbesses',
            category: 'food',
            duration: '1.5 hours',
            cost: '€16 – €28',
            tip: 'Save room for a sweet butter caramel crêpe with sea salt flakes.'
          },
          {
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: 'Musée d’Orsay Impressionist Gallery',
            desc: 'Housed in a grandiose Beaux-Arts railway station, marvel at Monet’s water lilies, Van Gogh’s Starry Night over the Rhone, and Degas’s ballerinas.',
            location: 'Esplanade Valéry Giscard d’Estaing',
            category: 'culture',
            duration: '2.5 hours',
            cost: '€16 (advance reservation required)',
            tip: 'Look through the giant clock face on the top floor for a framed view of the Seine and Montmartre.'
          },
          {
            time: '05:30 PM – 07:30 PM',
            timeOfDay: 'afternoon',
            activity: 'Champ de Mars & Trocadéro Sunset Overlook',
            desc: 'Stroll the lawns of Champ de Mars right beneath the iron lattice of the Eiffel Tower, then cross Pont d’Iéna to Trocadéro for the iconic angle.',
            location: 'Champ de Mars, 7th Arr.',
            category: 'sightseeing',
            duration: '2 hours',
            cost: 'Free',
            tip: 'Bring a picnic of Comté cheese, cherries, and a baguette for an unforgettable lawn aperitif.'
          },
          {
            time: '08:00 PM – 10:30 PM',
            timeOfDay: 'evening',
            activity: 'Farewell Parisian Dinner in the 7th',
            desc: 'Conclude your 3-day journey at a classic corner brasserie dining on steak frites with béarnaise sauce and warm tarte tatin.',
            location: 'Rue Cler / 7th Arr.',
            category: 'food',
            duration: '2.5 hours',
            cost: '€40 – €75',
            tip: 'Book Café Constant or Fontaine de Mars for traditional bourgeois French fare.'
          }
        ]
      }
    ],
    culinary: [
      { name: 'Croissant au Beurre & Café Allongé', desc: 'Flaky, caramelized all-butter viennoiserie fresh from morning boulangeries.', spot: 'Du Pain et des Idées or Stohrer (oldest bakery in Paris, est. 1730)' },
      { name: 'Steak Frites with Béarnaise', desc: 'Seared beef cut paired with hand-cut crispy fries and tarragon butter sauce.', spot: 'Le Relais de l’Entrecôte or Bistrot Paul Bert' },
      { name: 'Artisan Macarons', desc: 'Delicate almond meringue shells filled with dark chocolate ganache, pistachio, or salted caramel.', spot: 'Pierre Hermé or Ladurée' }
    ],
    packing: ['Broken-in walking shoes for cobblestone streets', 'Chic trench coat or tailored jacket', 'Crossbody bag with zipper for metro stations', 'Adaptor plug for European type C/E outlets'],
    tips: ['Always say "Bonjour, Madame/Monsieur" upon entering any shop, bakery, or restaurant—it is the baseline of French politeness.', 'Service is included by law in France; leave €1–€3 in small coins for good service.', 'Museum passes often skip the ticket line, but you still need a timed entry reservation online.']
  }
};

export function generateStructuredItinerary(
  city: string, 
  vibe = 'Balanced & Authentic', 
  pace = 'Moderate',
  daysCount = 3
): Itinerary {
  const norm = city.toLowerCase().trim();
  const targetDays = Math.max(1, Math.min(10, Number(daysCount) || 3));

  // If known city profile exists, return it
  if (CITY_DATABASE[norm]) {
    const prof = CITY_DATABASE[norm];
    const slicedDays = prof.days.slice(0, targetDays);
    return {
      id: `itinerary-${Date.now()}`,
      cityName: city.charAt(0).toUpperCase() + city.slice(1),
      country: prof.country,
      tagline: prof.tagline,
      overview: prof.overview,
      bestTimeToVisit: prof.bestTime,
      localCurrency: prof.currency,
      language: prof.language,
      transitTip: prof.transit,
      dailyBudgetEst: prof.budget,
      pace: pace,
      vibe: vibe,
      createdAt: new Date().toISOString(),
      days: slicedDays.map((d, dIdx) => ({
        dayNumber: dIdx + 1,
        title: d.title,
        theme: d.theme,
        dayHighlight: d.highlight,
        recommendedNeighborhood: d.hub,
        schedule: d.activities.map((act, aIdx) => ({
          id: `act-${dIdx + 1}-${aIdx + 1}`,
          time: act.time,
          timeOfDay: act.timeOfDay,
          activity: act.activity,
          description: act.desc,
          location: act.location,
          category: act.category,
          duration: act.duration,
          costEstimate: act.cost,
          insiderTip: act.tip,
        }))
      })),
      packingEssentials: prof.packing,
      culinaryHighlights: prof.culinary.map(c => ({
        name: c.name,
        description: c.desc,
        whereToTry: c.spot,
      })),
      practicalTips: prof.tips,
    };
  }

  // Generic intelligent structured generator for any global city
  const capitalizedCity = city.trim().charAt(0).toUpperCase() + city.trim().slice(1);
  return {
    id: `itinerary-${Date.now()}`,
    cityName: capitalizedCity,
    country: 'India',
    tagline: `Heritage Landmarks, Colorful Bazaars & Iconic Flavors (${targetDays} Days in ${capitalizedCity})`,
    overview: `Experience the best of ${capitalizedCity} through this thoughtfully timed ${targetDays}-day journey across India. Designed to maximize your discovery while clustering sights by neighborhood to avoid traffic bottlenecks, you will explore cultural monuments, authentic local food gems, and vibrant craft markets.`,
    bestTimeToVisit: 'October–March for pleasant sightseeing weather and cool evenings.',
    localCurrency: 'Indian Rupee (₹ / INR)',
    language: 'Hindi, Regional State Language & English',
    transitTip: 'Auto-rickshaws, metro lines, and app cabs (Uber/Ola) are the most convenient. UPI payments (GPay, PhonePe) work virtually everywhere.',
    dailyBudgetEst: '₹2,000 – ₹5,500 INR / day',
    pace: pace,
    vibe: vibe,
    createdAt: new Date().toISOString(),
    days: [
      {
        dayNumber: 1,
        title: `Historic Heart & City Center Discovery`,
        theme: 'Heritage Landmarks & Atmospheric Plazas',
        dayHighlight: `Walking through the historic core and main plaza of ${capitalizedCity}`,
        recommendedNeighborhood: `Central Historic Quarter`,
        schedule: [
          {
            id: 'act-1-1',
            time: '08:30 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: `Old Town Walking Tour & Monumental Landmarks`,
            description: `Start your first morning in ${capitalizedCity} walking through the atmospheric streets of the historic core. Visit the monumental central architecture and heritage civic buildings.`,
            location: `Historic Center, ${capitalizedCity}`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: '₹50 – ₹150 INR',
            insiderTip: 'Start early in the morning for soft natural light and quiet, uncrowded streets before shops open.'
          },
          {
            id: 'act-1-2',
            time: '11:30 AM – 01:00 PM',
            timeOfDay: 'morning',
            activity: `Traditional Market Breakfast & Chai`,
            description: `Sample regional specialties at the city’s bustling heritage food market, featuring freshly fried kachoris, hot parathas, and clay-cup masala chai.`,
            location: `Central Bazaar`,
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹80 – ₹200 INR',
            insiderTip: 'Look for stalls with long queues of local residents for the freshest daily batches.'
          },
          {
            id: 'act-1-3',
            time: '01:30 PM – 04:00 PM',
            timeOfDay: 'afternoon',
            activity: `City Palace & State Art Museum`,
            description: `Spend the early afternoon immersed in the region’s rich cultural legacy, examining centuries of royal archives, miniature paintings, and antique weapons.`,
            location: `Museum Quarter`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: '₹100 – ₹300 INR',
            insiderTip: 'Hire a certified local museum guide to learn fascinating folklore behind the royal exhibits.'
          },
          {
            id: 'act-1-4',
            time: '05:00 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: `Sunset Promenade & Welcome Feast`,
            description: `Stroll along the pedestrian lakefront or river promenade during twilight, followed by a multi-course dinner at an authentic neighborhood heritage restaurant.`,
            location: `Promenade & Old Town`,
            category: 'food',
            duration: '3.5 hours',
            costEstimate: '₹400 – ₹900 INR',
            insiderTip: 'Request an outdoor patio table to soak in the evening breeze and ambient temple bells.'
          }
        ]
      },
      {
        dayNumber: 2,
        title: `Artisan Neighborhoods, Boutiques & Scenic Overlook`,
        theme: 'Creative Quarters, Handloom Craft & Sunset Panoramas',
        dayHighlight: `Catching the golden hour sunset panorama over the ${capitalizedCity} skyline`,
        recommendedNeighborhood: `Artisan & Crafts District`,
        schedule: [
          {
            id: 'act-2-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: `Artisan Quarter Stroll & Local Workshops`,
            description: `Explore the creative district known for textile hand-blocks, pottery, brassware, and traditional artisan workshops.`,
            location: `Crafts District`,
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Free browsing',
            insiderTip: 'Seek out back-alley workshops where craftsmen demonstrate generational hand-carving techniques.'
          },
          {
            id: 'act-2-2',
            time: '12:00 PM – 01:30 PM',
            timeOfDay: 'morning',
            activity: `Authentic Regional Thali Lunch`,
            description: `Enjoy a traditional multi-dish platter with seasonal vegetables, slow-cooked lentils, fragrant basmati rice, and hot rotis.`,
            location: `Bazaar Dining Hall`,
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹250 – ₹500 INR',
            insiderTip: 'Ask the server for extra ghee on your rotis and traditional buttermilk (chaas).'
          },
          {
            id: 'act-2-3',
            time: '02:00 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: `Botanical Gardens or Historical Stepwell`,
            description: `Unwind under the shaded canopy of royal gardens or explore the geometric stone staircases of an ancient stepwell.`,
            location: `Green Heritage Belt`,
            category: 'nature',
            duration: '2.5 hours',
            costEstimate: '₹30 – ₹100 INR',
            insiderTip: 'Bring a reusable water bottle and wear comfortable shoes for walking on stone paths.'
          },
          {
            id: 'act-2-4',
            time: '05:30 PM – 09:00 PM',
            timeOfDay: 'evening',
            activity: `Hillside Fort Sunset & Twilight Dinner`,
            description: `Head up to an elevated viewpoint or fort rampart to watch the city lights flicker on below during twilight dinner.`,
            location: `Hilltop Overlook`,
            category: 'sightseeing',
            duration: '3.5 hours',
            costEstimate: '₹500 – ₹1,200 INR',
            insiderTip: 'Arrive 45 minutes before sunset to capture both the golden glow and twilight illumination.'
          }
        ]
      },
      {
        dayNumber: 3,
        title: `Royal Fortresses, Riverside Walk & Cultural Celebration`,
        theme: 'Grand Architecture, Riverside Breezes & Festive Dining',
        dayHighlight: `A celebratory dinner with live classical instrumental music`,
        recommendedNeighborhood: `Royal Estate & Riverside District`,
        schedule: [
          {
            id: 'act-3-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: `Historic Hill Fort & Ramparts`,
            description: `Explore the monumental fortress that once defended the region, walking along ancient battlements and royal courtyards.`,
            location: `Fort Quarter`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: '₹70 – ₹200 INR',
            insiderTip: 'Check out the secret water reservoirs that engineered self-sufficient water supplies centuries ago.'
          },
          {
            id: 'act-3-2',
            time: '12:00 PM – 01:30 PM',
            timeOfDay: 'morning',
            activity: `Riverside Garden Lunch`,
            description: `Dine along the water enjoying regional specialties, paneer gravies, roasted vegetables, and warm desserts.`,
            location: `Riverside Promenade`,
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹300 – ₹600 INR',
            insiderTip: 'Check if reservations are needed for water-facing patio tables.'
          },
          {
            id: 'act-3-3',
            time: '02:00 PM – 04:30 PM',
            timeOfDay: 'afternoon',
            activity: `Handicrafts Emporium & Souvenir Hunt`,
            description: `Pick up certified authentic local edible gifts (spices, tea, sweets) and handcrafted textiles to take home.`,
            location: `Handloom Emporium`,
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Browse free',
            insiderTip: 'Government emporiums in ${capitalizedCity} offer fixed, transparent prices for certified regional crafts.'
          },
          {
            id: 'act-3-4',
            time: '06:00 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: `Farewell Feast with Live Sitar & Tabla`,
            description: `Celebrate your final evening in ${capitalizedCity} with an unforgettable multi-course feast and traditional live Indian music.`,
            location: `Heritage Courtyard`,
            category: 'food',
            duration: '3.5 hours',
            costEstimate: '₹600 – ₹1,500 INR',
            insiderTip: 'Toast with saffron almond milk or regional cooler to a memorable journey.'
          }
        ]
      },
      {
        dayNumber: 4,
        title: `Spiritual Sanctuaries & Ancient Stepwells`,
        theme: 'Sacred Temples, Architectural Wonders & Serene Courtyards',
        dayHighlight: `Peaceful morning prayers and chanting at ${capitalizedCity}’s revered heritage shrine`,
        recommendedNeighborhood: `Old Temple & Heritage Quarter`,
        schedule: [
          {
            id: 'act-4-1',
            time: '07:30 AM – 10:00 AM',
            timeOfDay: 'morning',
            activity: `Heritage Temple & Stepwell Architecture`,
            description: `Start early visiting the stone-carved shrine and geometric stepwell that has served as a community sanctuary for centuries.`,
            location: `Temple Quarter`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: 'Free entry',
            insiderTip: 'Keep socks handy for walking across stone temple courtyards in sunny hours.'
          },
          {
            id: 'act-4-2',
            time: '10:30 AM – 12:00 PM',
            timeOfDay: 'morning',
            activity: `Traditional Sweets & Hot Kulhad Chai Trail`,
            description: `Stop at historic sweet confectioneries known for freshly made jalebis, kachoris, and thick cardamom tea in earthen cups.`,
            location: `Heritage Bazaar`,
            category: 'food',
            duration: '1.5 hours',
            costEstimate: '₹80 – ₹150 INR',
            insiderTip: 'Try the local regional mithai unique to this city.'
          },
          {
            id: 'act-4-3',
            time: '01:00 PM – 03:30 PM',
            timeOfDay: 'afternoon',
            activity: `Master Weaving & Handloom Colony`,
            description: `Watch master artisans weave traditional silk or cotton fabrics on wooden pit looms, supporting local weaver guilds.`,
            location: `Weavers Quarter`,
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Free / craft purchase',
            insiderTip: 'Ask about the GI (Geographical Indication) tag for certified authentic local handloom products.'
          },
          {
            id: 'act-4-4',
            time: '05:30 PM – 08:30 PM',
            timeOfDay: 'evening',
            activity: `Twilight Ghats Walk & Evening Aarti Ceremony`,
            description: `Experience the evening devotional aarti ceremony with giant brass lamps, aromatic incense, and ringing temple bells by the water.`,
            location: `Waterfront Ghats`,
            category: 'relaxation',
            duration: '3 hours',
            costEstimate: 'Free / ₹50 boat seat',
            insiderTip: 'Arrive 20 minutes before sunset to secure steps near the main priest platforms.'
          }
        ]
      },
      {
        dayNumber: 5,
        title: `Hilltop Panoramas, Nature Trails & Open-Air Dhabas`,
        theme: 'Ridge Breezes, Countryside Scenery & Rustic Delicacies',
        dayHighlight: `Watching the sun dip below the surrounding valley hills`,
        recommendedNeighborhood: `Outer Ridge & Hill Environs`,
        schedule: [
          {
            id: 'act-5-1',
            time: '08:00 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: `Hilltop Citadel & Nature Ridge Walk`,
            description: `Climb or drive up to the high outer ramparts offering bird’s-eye views over the entire valley and urban landscape below.`,
            location: `Ridge Fortress`,
            category: 'sightseeing',
            duration: '3 hours',
            costEstimate: '₹50 – ₹150 INR',
            insiderTip: 'Carry a small water bottle and enjoy the crisp morning mountain air.'
          },
          {
            id: 'act-5-2',
            time: '12:00 PM – 01:45 PM',
            timeOfDay: 'afternoon',
            activity: `Authentic Highway Dhaba Lunch`,
            description: `Savor rustic tandoori breads, slow-cooked lentils with melted butter, and fresh seasonal curries at a beloved roadside dhaba.`,
            location: `Valley Highway`,
            category: 'food',
            duration: '1.75 hours',
            costEstimate: '₹250 – ₹450 INR',
            insiderTip: 'Ask for fresh curd (dahi) or salted chaas to complement the tandoori spices.'
          },
          {
            id: 'act-5-3',
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: `Botanical Sanctuary & Fruit Orchard Stroll`,
            description: `Stroll through peaceful botanical gardens or fruit orchards displaying regional tree canopies and indigenous flowering plants.`,
            location: `Green Sanctuary`,
            category: 'nature',
            duration: '2.5 hours',
            costEstimate: '₹30 entry',
            insiderTip: 'Great quiet spot for reading or sketching amidst birdsong.'
          },
          {
            id: 'act-5-4',
            time: '06:00 PM – 09:00 PM',
            timeOfDay: 'evening',
            activity: `Sunset Rooftop Cafe & Folk Sarangi Music`,
            description: `Relax on an elevated rooftop terrace enjoying evening tea or dinner accompanied by traditional live folk sarangi and flute melodies.`,
            location: `Hillview Terrace`,
            category: 'relaxation',
            duration: '3 hours',
            costEstimate: '₹400 – ₹900 INR',
            insiderTip: 'Pre-book outdoor terrace tables on weekends to catch the golden sunset light.'
          }
        ]
      },
      {
        dayNumber: 6,
        title: `Vintage Havelis, Hidden Alleyways & Iconic Street Food Trail`,
        theme: 'Living Heritage, Courtyard Architecture & Culinary Traditions',
        dayHighlight: `Discovering secret carved jharokha balconies and courtyard havelis in the old city`,
        recommendedNeighborhood: `Ancient Residential Wards`,
        schedule: [
          {
            id: 'act-6-1',
            time: '08:30 AM – 11:00 AM',
            timeOfDay: 'morning',
            activity: `Heritage Haveli & Street Architecture Walk`,
            description: `Follow quiet inner lanes to see residential mansions with carved teakwood doorways, stone brackets, and frescoed courtyards.`,
            location: `Old City Walled Core`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: 'Free walk',
            insiderTip: 'Many heritage havelis are still lived in by multi-generational families who welcome polite questions.'
          },
          {
            id: 'act-6-2',
            time: '11:30 AM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: `Historic Chaat & Paratha Tasting Trail`,
            description: `Sample the city’s crown jewels: crispy dahi puri, tangy spicy chaats, stuffed griddled parathas, and cold lassi.`,
            location: `Old Food Street`,
            category: 'food',
            duration: '2.5 hours',
            costEstimate: '₹150 – ₹300 INR',
            insiderTip: 'Always choose stalls with hot frying pans and heavy local crowd turnover.'
          },
          {
            id: 'act-6-3',
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: `Antique Bazaars & Traditional Brassware`,
            description: `Browse vintage brass lamps, handcrafted bronze cookware, vintage coins, and antique wooden carvings.`,
            location: `Old Brass & Antique Market`,
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Free browsing',
            insiderTip: 'Polite, friendly negotiation is expected for vintage handicraft curios.'
          },
          {
            id: 'act-6-4',
            time: '06:00 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: `Twilight Lake Cruise & Open-Air Candlelit Dinner`,
            description: `Glide across calm waters on a heritage boat as dusk turns to deep twilight, followed by an open-air dinner.`,
            location: `Lakeside Enclave`,
            category: 'relaxation',
            duration: '3.5 hours',
            costEstimate: '₹600 – ₹1,400 INR',
            insiderTip: 'Bring a light shawl for cool evening breezes near the water.'
          }
        ]
      },
      {
        dayNumber: 7,
        title: `Royal Farewell, Souvenir Trail & Grand Feast`,
        theme: 'Artisan Treasures, Reflection & Royal Banquet',
        dayHighlight: `A majestic multi-course farewell dinner celebrating regional flavors and royal delicacies`,
        recommendedNeighborhood: `Palace Quarter & Modern City Hub`,
        schedule: [
          {
            id: 'act-7-1',
            time: '09:00 AM – 11:30 AM',
            timeOfDay: 'morning',
            activity: `Unhurried Artisan Breakfast & Last-Minute Souvenir Shopping`,
            description: `Pick up vacuum-packed local spices, traditional sweets, tea leaves, and hand-embroidered textiles for gifts.`,
            location: `Central Emporium District`,
            category: 'shopping',
            duration: '2.5 hours',
            costEstimate: 'Shopping budget',
            insiderTip: 'Look for government-run state emporiums for certified fixed prices and genuine origin certificates.'
          },
          {
            id: 'act-7-2',
            time: '12:00 PM – 02:00 PM',
            timeOfDay: 'afternoon',
            activity: `Royal Thali Lunch with Regional Specialties`,
            description: `Sit down for an elaborate multi-course royal thali featuring seasonal curries, local breads, chutneys, and desserts.`,
            location: `Heritage Dining Hall`,
            category: 'food',
            duration: '2 hours',
            costEstimate: '₹500 – ₹1,200 INR',
            insiderTip: 'Thali refill is usually unlimited; take your time to savor each miniature bowl.'
          },
          {
            id: 'act-7-3',
            time: '02:30 PM – 05:00 PM',
            timeOfDay: 'afternoon',
            activity: `City Museum & Royal Carriage Gallery`,
            description: `Admire ancient armory, royal vintage cars, silver palanquins, and portraits preserving the historical legacy of the region.`,
            location: `Palace Museum Annex`,
            category: 'culture',
            duration: '2.5 hours',
            costEstimate: '₹100 – ₹250 INR',
            insiderTip: 'The photography gallery provides fascinating comparative photos of the city from the 1890s versus today.'
          },
          {
            id: 'act-7-4',
            time: '06:00 PM – 09:30 PM',
            timeOfDay: 'evening',
            activity: `Grand Farewell Dinner Celebration`,
            description: `Celebrate your journey with an unforgettable meal under royal archways, accompanied by instrumental classical music and dessert delicacies.`,
            location: `Historic Grand Courtyard`,
            category: 'food',
            duration: '3.5 hours',
            costEstimate: '₹800 – ₹2,000 INR',
            insiderTip: 'Reflect on the memories, photos, and vibrant colors of your Indian journey.'
          }
        ]
      }
    ].slice(0, targetDays),
    packingEssentials: [
      'Comfortable slip-on footwear (easy to take off outside temples and sacred monuments)',
      'Lightweight breathable cotton clothing and a light scarf/dupatta for shrines',
      'High-SPF sunscreen, UV sunglasses, and portable power bank for daily photos',
      'Hand sanitizer, wet wipes, and an eco-friendly reusable water bottle'
    ],
    culinaryHighlights: [
      {
        name: `Regional Special Thali & Local Bread`,
        description: `Traditional multi-dish platter with authentic local lentils, seasonal vegetable gravies, fragrant rice, and freshly puffed rotis.`,
        whereToTry: `Heritage family-run dining halls in Central Market`
      },
      {
        name: `Iconic Street Food & Chai in Clay Kulhad`,
        description: `Handcrafted savory chaat or kachori with spiced mint-tamarind chutney, paired with hot cardamom clay-cup tea.`,
        whereToTry: `Legendary street food lanes in Old Town`
      },
      {
        name: `Traditional Regional Mithai (Sweet)`,
        description: `Centuries-old milk or dry-fruit confection freshly prepared with pure desi ghee and saffron.`,
        whereToTry: `Renowned sweet confectioneries near the historic center`
      }
    ],
    practicalTips: [
      `UPI payment (Google Pay, PhonePe, Paytm) is accepted by nearly all merchants, including small auto-rickshaws and tea stalls.`,
      `Always remove footwear at temple entrances and deposit them at designated token counters.`,
      `Morning hours (08:00 AM – 11:30 AM) offer the best lighting and comfortable temperatures before the afternoon heat.`
    ]
  };
}
