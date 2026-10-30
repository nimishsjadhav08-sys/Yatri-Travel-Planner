/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  AlertCircle, 
  CalendarDays, 
  UtensilsCrossed, 
  Route, 
  ArrowRight 
} from 'lucide-react';
import { Itinerary, ItineraryGenerationRequest } from './types';
import { SAMPLE_ITINERARIES } from './data/sampleItineraries';
import { 
  getSavedItineraries, 
  saveItinerary, 
  deleteSavedItinerary,
  getCheckedActivities,
  toggleCheckedActivity,
  getActivityNotes,
  saveActivityNote
} from './utils/storage';
import { Header } from './components/Header';
import { CityInputForm } from './components/CityInputForm';
import { ItineraryView } from './components/ItineraryView';
import { SavedTripsDrawer } from './components/SavedTripsDrawer';
import { LoadingSkeleton } from './components/LoadingSkeleton';

export default function App() {
  const [activeItinerary, setActiveItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCity, setLoadingCity] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [savedItineraries, setSavedItineraries] = useState<Itinerary[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [checkedActivities, setCheckedActivities] = useState<Record<string, boolean>>({});
  const [activityNotes, setActivityNotes] = useState<Record<string, string>>({});

  // Initialize saved itineraries from local storage
  useEffect(() => {
    const saved = getSavedItineraries();
    setSavedItineraries(saved);
  }, []);

  // Update checkmarks and notes when active itinerary changes
  useEffect(() => {
    if (activeItinerary) {
      setCheckedActivities(getCheckedActivities(activeItinerary.id));
      setActivityNotes(getActivityNotes(activeItinerary.id));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeItinerary?.id]);

  const handleGenerate = async (req: ItineraryGenerationRequest) => {
    setIsLoading(true);
    setLoadingCity(req.city);
    setError(null);

    try {
      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate itinerary. Please try again.');
      }

      if (!data.itinerary) {
        throw new Error('Invalid itinerary format received.');
      }

      setActiveItinerary(data.itinerary);
    } catch (err: any) {
      console.error('Itinerary generation error:', err);
      // If error occurs, check if we have a sample for this city as fallback
      const norm = req.city.toLowerCase().trim();
      if (SAMPLE_ITINERARIES[norm]) {
        const days = Number(req.daysCount) || 3;
        setActiveItinerary({
          ...SAMPLE_ITINERARIES[norm],
          days: SAMPLE_ITINERARIES[norm].days.slice(0, days)
        });
        setError(null);
      } else {
        setError(err.message || 'An unexpected error occurred while planning your trip.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectSample = (cityKey: string, daysCount = 3) => {
    const sample = SAMPLE_ITINERARIES[cityKey.toLowerCase()];
    if (sample) {
      setActiveItinerary({
        ...sample,
        days: sample.days.slice(0, daysCount)
      });
      setError(null);
    }
  };

  const handleToggleSaveActive = () => {
    if (!activeItinerary) return;
    const isCurrentlySaved = savedItineraries.some((i) => i.id === activeItinerary.id);
    
    if (isCurrentlySaved) {
      const updated = deleteSavedItinerary(activeItinerary.id);
      setSavedItineraries(updated);
    } else {
      saveItinerary(activeItinerary);
      setSavedItineraries(getSavedItineraries());
    }
  };

  const handleDeleteSavedTrip = (id: string) => {
    const updated = deleteSavedItinerary(id);
    setSavedItineraries(updated);
  };

  const handleToggleActivityCheck = (activityId: string) => {
    if (!activeItinerary) return;
    const updated = toggleCheckedActivity(activeItinerary.id, activityId);
    setCheckedActivities({ ...updated });
  };

  const handleSaveActivityNote = (activityId: string, note: string) => {
    if (!activeItinerary) return;
    const updated = saveActivityNote(activeItinerary.id, activityId, note);
    setActivityNotes({ ...updated });
  };

  const handleResetToLanding = () => {
    setActiveItinerary(null);
    setError(null);
  };

  const isCurrentItinerarySaved = Boolean(
    activeItinerary && savedItineraries.some((i) => i.id === activeItinerary.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-200">
      <Header
        savedCount={savedItineraries.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onReset={handleResetToLanding}
        hasActiveItinerary={Boolean(activeItinerary)}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Error notification banner */}
        {error && (
          <div className="max-w-3xl mx-auto mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-rose-900">Itinerary Generation Issue</p>
              <p className="mt-0.5 text-xs text-rose-700">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-xs text-rose-600 hover:text-rose-900 font-semibold cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Loading state */}
        {isLoading && <LoadingSkeleton cityName={loadingCity} />}

        {/* Active Itinerary View */}
        {!isLoading && activeItinerary && (
          <ItineraryView
            itinerary={activeItinerary}
            isSaved={isCurrentItinerarySaved}
            onSave={handleToggleSaveActive}
            onNewSearch={handleResetToLanding}
            checkedActivities={checkedActivities}
            onToggleCheck={handleToggleActivityCheck}
            activityNotes={activityNotes}
            onSaveNote={handleSaveActivityNote}
          />
        )}

        {/* Landing Home View */}
        {!isLoading && !activeItinerary && (
          <div className="space-y-12 sm:space-y-16 py-4 sm:py-8">
            {/* Hero Title & Subtitle */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/80 text-amber-950 rounded-full text-xs font-semibold border border-amber-200/60 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Explore Incredible India 🇮🇳 · Custom Itinerary Generator</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900 text-balance leading-tight">
                Plan your perfect journey across India.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
                Choose your trip duration (1 to 7 days), select your travel vibe, and receive a structured hour-by-hour schedule with neighborhood clusters, street food legends, and transit tips.
              </p>
            </div>

            {/* City Input & Search Box */}
            <CityInputForm
              onGenerate={handleGenerate}
              isLoading={isLoading}
              onSelectSample={handleSelectSample}
            />

            {/* Curated Previews: Jaipur, Goa & Varanasi */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                  <span>Curated Featured Journeys</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60 font-sans">
                    Instant Ready
                  </span>
                </h2>
                <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                  Click to explore full schedule
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Jaipur Card */}
                <div 
                  onClick={() => handleSelectSample('jaipur')}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-500/80 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
                      <span className="text-amber-800 font-semibold">Rajasthan</span>
                      <span>3 Days · 15 Spots</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      Jaipur
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      Amber Fort, Sheesh Mahal, Nahargarh sunset, Hawa Mahal rooftop chai & Pink City bazaars.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-500 group-hover:text-stone-900">
                      Explore Schedule
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Goa Card */}
                <div 
                  onClick={() => handleSelectSample('goa')}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-500/80 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
                      <span className="text-teal-800 font-semibold">West Coast</span>
                      <span>3 Days · 14 Spots</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      Goa
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      Fontainhas Latin Quarter, Chapora Fort cliffside, tropical spice farms & sunset beach shacks.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-500 group-hover:text-stone-900">
                      Explore Schedule
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Varanasi Card */}
                <div 
                  onClick={() => handleSelectSample('varanasi')}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-500/80 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-medium">
                      <span className="text-orange-800 font-semibold">Uttar Pradesh</span>
                      <span>3 Days · 14 Spots</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      Varanasi
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      Sunrise rowboat on Ganga, Kashi Vishwanath corridor, twilight Maha Aarti & Sarnath stupas.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-500 group-hover:text-stone-900">
                      Explore Schedule
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why 3-Day Travel Section */}
            <div className="max-w-4xl mx-auto pt-6 border-t border-stone-200/80">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold mb-6 text-center">
                Built For Realistic Travel Across India
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/60 rounded-xl p-5 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                    <Route className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-stone-900 text-sm mb-1">
                    Neighborhood Clustering
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Sights are grouped by zone each day to beat city traffic and eliminate exhausting auto-rickshaw backtracking.
                  </p>
                </div>

                <div className="bg-white/60 rounded-xl p-5 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                    <CalendarDays className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-stone-900 text-sm mb-1">
                    Smart Weather & Crowds Pacing
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Early morning starts for forts and ghats before peak heat, mid-day indoor museums or thalis, and sunset viewpoints.
                  </p>
                </div>

                <div className="bg-white/60 rounded-xl p-5 border border-stone-200/60">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-stone-900 text-sm mb-1">
                    Authentic Dining & Tips
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    From historic kachori and chaat legends to beach shacks, with UPI payment tips and temple shoe etiquette.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-stone-200 bg-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-stone-800">Yatri (यात्री)</span>
            <span>· Incredible India Travel Studio</span>
          </div>
          <p className="text-stone-400">
            Export plans as Markdown, print cleanly to PDF, or save locally for your journey.
          </p>
        </div>
      </footer>

      {/* Saved Trips Drawer */}
      <SavedTripsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItineraries={savedItineraries}
        onSelectTrip={(trip) => {
          setActiveItinerary(trip);
          setError(null);
        }}
        onDeleteTrip={handleDeleteSavedTrip}
      />
    </div>
  );
}
