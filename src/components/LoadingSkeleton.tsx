import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, MapPin, Clock } from 'lucide-react';

interface LoadingSkeletonProps {
  cityName: string;
}

const GENERATION_STEPS = [
  'Analyzing city topography and iconic neighborhoods...',
  'Clustering 3 distinct days to minimize transit travel time...',
  'Timing morning visits, scenic lunches, and golden-hour sunset spots...',
  'Adding local culinary dishes, etiquette tips, and packing essentials...',
  'Finalizing your structured 3-day itinerary...',
];

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ cityName }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev < GENERATION_STEPS.length - 1 ? prev + 1 : prev));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-8 animate-fade-in">
      {/* Progress Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-xs text-center space-y-5">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 animate-pulse">
          <Compass className="w-7 h-7 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-semibold">
            Architecting Your Journey
          </span>
          <h2 className="font-display text-2xl font-bold text-stone-900 mt-1">
            Curating 3 Days in {cityName}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-2 h-6 font-medium transition-all duration-300">
            {GENERATION_STEPS[currentStepIdx]}
          </p>
        </div>

        {/* Step dots */}
        <div className="flex justify-center items-center gap-1.5 pt-2">
          {GENERATION_STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentStepIdx
                  ? 'w-6 bg-amber-600'
                  : idx < currentStepIdx
                  ? 'w-2 bg-stone-400'
                  : 'w-2 bg-stone-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ghost timeline skeleton */}
      <div className="space-y-4 opacity-50 pointer-events-none">
        <div className="h-28 bg-stone-200/80 rounded-2xl animate-pulse" />
        <div className="space-y-3 pl-8">
          <div className="h-32 bg-stone-100 rounded-xl border border-stone-200 animate-pulse" />
          <div className="h-32 bg-stone-100 rounded-xl border border-stone-200 animate-pulse" />
          <div className="h-32 bg-stone-100 rounded-xl border border-stone-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
