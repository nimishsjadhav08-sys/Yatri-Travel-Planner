import React from 'react';
import { X, Trash2, Calendar, MapPin, ArrowRight, Compass } from 'lucide-react';
import { Itinerary } from '../types';

interface SavedTripsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItineraries: Itinerary[];
  onSelectTrip: (itinerary: Itinerary) => void;
  onDeleteTrip: (id: string) => void;
}

export const SavedTripsDrawer: React.FC<SavedTripsDrawerProps> = ({
  isOpen,
  onClose,
  savedItineraries,
  onSelectTrip,
  onDeleteTrip,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600" />
            <h2 className="font-display font-bold text-lg text-stone-900">
              Saved Itineraries
            </h2>
            <span className="text-xs font-mono bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
              {savedItineraries.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {savedItineraries.length === 0 ? (
            <div className="py-16 text-center text-stone-400">
              <Compass className="w-10 h-10 mx-auto mb-3 opacity-40 text-stone-400" />
              <p className="text-sm font-medium text-stone-600">No saved trips yet</p>
              <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                Generate an itinerary for any city and click "Save Trip" to keep it here for your travels.
              </p>
            </div>
          ) : (
            savedItineraries.map((trip) => (
              <div
                key={trip.id}
                className="group p-4 bg-stone-50 hover:bg-amber-50/40 border border-stone-200 hover:border-amber-300 rounded-xl transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-stone-900 text-base group-hover:text-amber-900 transition-colors">
                      {trip.cityName}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium">
                      {trip.country} · 3-Day Plan
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTrip(trip.id);
                    }}
                    className="text-stone-400 hover:text-rose-600 p-1 rounded transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                  {trip.tagline}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                  <span className="text-[11px] text-stone-400 font-mono">
                    {new Date(trip.createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <button
                    onClick={() => {
                      onSelectTrip(trip);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-700 cursor-pointer"
                  >
                    <span>View Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
