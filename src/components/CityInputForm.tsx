import React, { useState } from 'react';
import { Search, SlidersHorizontal, Sparkles, MapPin, Compass, Users, Activity, Flame, Calendar } from 'lucide-react';
import { ItineraryGenerationRequest } from '../types';

interface CityInputFormProps {
  onGenerate: (req: ItineraryGenerationRequest) => void;
  isLoading: boolean;
  onSelectSample: (cityName: string) => void;
}

const DURATION_PRESETS = [1, 2, 3, 4, 5, 7];

const POPULAR_DESTINATIONS = [
  { name: 'Jaipur', country: 'Rajasthan', vibe: 'Forts & Royal Palaces' },
  { name: 'Goa', country: 'West Coast', vibe: 'Beaches & Heritage' },
  { name: 'Varanasi', country: 'Uttar Pradesh', vibe: 'Ghats & Spiritual Aarti' },
  { name: 'Udaipur', country: 'Rajasthan', vibe: 'Lakes & Havelis' },
  { name: 'Kochi', country: 'Kerala', vibe: 'Backwaters & Spice Trails' },
  { name: 'Mumbai', country: 'Maharashtra', vibe: 'Marine Drive & Street Food' },
  { name: 'Manali', country: 'Himachal', vibe: 'Himalayas & Pine Valleys' },
];

const VIBE_OPTIONS = [
  'Heritage, Forts & Royal Palaces',
  'Spiritual, Ghats & Sacred Temples',
  'Street Food & Royal Thalis (Foodie Journey)',
  'Beaches, Backwaters & Coastal Leisure',
  'Hill Stations & Himalayan Serenity',
  'Art, Handlooms & Colorful Bazaars'
];

const PACE_OPTIONS = [
  'Moderate & Balanced (Chai breaks included)',
  'Relaxed & Unhurried (Slow Travel)',
  'Packed & High-Energy (Cover Top Sights)'
];

const TRAVELER_OPTIONS = [
  'Solo Explorer',
  'Couple / Romantic',
  'Family (Kids & Elders)',
  'Friends Gang'
];

export const CityInputForm: React.FC<CityInputFormProps> = ({
  onGenerate,
  isLoading,
  onSelectSample,
}) => {
  const [city, setCity] = useState('');
  const [daysCount, setDaysCount] = useState<number>(3);
  const [vibe, setVibe] = useState(VIBE_OPTIONS[0]);
  const [pace, setPace] = useState(PACE_OPTIONS[0]);
  const [travelerType, setTravelerType] = useState(TRAVELER_OPTIONS[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim() || isLoading) return;
    onGenerate({
      city: city.trim(),
      daysCount,
      vibe,
      pace,
      travelerType,
    });
  };

  const handleQuickSelect = (cityName: string) => {
    setCity(cityName);
    onGenerate({
      city: cityName,
      daysCount,
      vibe,
      pace,
      travelerType,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="city-input" className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Where do you want to explore?
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-stone-400 pointer-events-none">
                <MapPin className="w-5 h-5" />
              </div>
              <input
                id="city-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter any Indian city (e.g. Jaipur, Goa, Varanasi, Udaipur, Kochi, Mumbai)..."
                disabled={isLoading}
                className="w-full pl-12 pr-28 py-3.5 text-base sm:text-lg text-stone-900 bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition-all placeholder:text-stone-400"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!city.trim() || isLoading}
                className="absolute right-2 px-4 py-2 bg-stone-900 text-white hover:bg-amber-600 disabled:opacity-40 disabled:hover:bg-stone-900 font-medium text-sm rounded-lg transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-900 cursor-pointer"
              >
                {isLoading ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Planning...</span>
                  </span>
                ) : (
                  <>
                    <span>Generate</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Number of Days Option (Duration Selector) */}
          <div className="bg-stone-50/80 rounded-xl p-3.5 border border-stone-200/80">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>How many days? (Trip Duration)</span>
              </label>
              <span className="text-xs font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-300/60">
                {daysCount} {daysCount === 1 ? 'Day' : 'Days'} Itinerary
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {DURATION_PRESETS.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDaysCount(d)}
                  disabled={isLoading}
                  className={`py-2 px-1 text-center rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    daysCount === d
                      ? 'bg-stone-900 text-white shadow-sm ring-2 ring-stone-900'
                      : 'bg-white border border-stone-200 text-stone-700 hover:border-amber-400 hover:text-stone-900'
                  }`}
                >
                  {d} {d === 1 ? 'Day' : 'Days'}
                </button>
              ))}
            </div>
          </div>

          {/* Expandable preferences */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowOptions(!showOptions)}
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 font-medium transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showOptions ? 'Hide preferences' : 'Customize travel vibe, pace & style'}</span>
            </button>

            {showOptions && (
              <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Travel Vibe
                  </label>
                  <select
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {VIBE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Pace
                  </label>
                  <select
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {PACE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5">
                    Traveling With
                  </label>
                  <select
                    value={travelerType}
                    onChange={(e) => setTravelerType(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {TRAVELER_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Quick Inspiration Chips */}
        <div className="mt-6 pt-5 border-t border-stone-100">
          <p className="text-xs text-stone-400 font-medium mb-2.5">
            Popular destinations to try instantly:
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_DESTINATIONS.map((dest) => (
              <button
                key={dest.name}
                type="button"
                onClick={() => handleQuickSelect(dest.name)}
                disabled={isLoading}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100/70 hover:bg-stone-200/80 rounded-lg text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <span>{dest.name}</span>
                <span className="text-stone-400 text-[11px]">· {dest.country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
