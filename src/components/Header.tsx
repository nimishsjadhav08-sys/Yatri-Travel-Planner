import React from 'react';
import { Compass, Bookmark, Plus } from 'lucide-react';

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onReset: () => void;
  hasActiveItinerary: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenSaved,
  onReset,
  hasActiveItinerary,
}) => {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur-md sticky top-0 z-30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={onReset}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -ml-1"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-stone-900 flex items-center gap-1.5">
                <span>Yatri</span>
                <span className="text-amber-600">·</span>
                <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-1.5 py-0.5 rounded border border-amber-200">यात्री</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
                <span>🇮🇳</span>
                <span className="font-mono tracking-wider uppercase text-[10px]">Incredible Journeys</span>
              </span>
            </div>
            <p className="text-xs text-stone-500 hidden sm:block">Curated custom travel itineraries across India</p>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {hasActiveItinerary && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Search</span>
            </button>
          )}

          <button
            onClick={onOpenSaved}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors relative"
            title="View saved itineraries"
          >
            <Bookmark className="w-4 h-4 text-stone-500" />
            <span>Saved Trips</span>
            {savedCount > 0 && (
              <span className="text-[11px] font-mono font-semibold px-1.5 py-0.2 bg-stone-200 text-stone-800 rounded">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
