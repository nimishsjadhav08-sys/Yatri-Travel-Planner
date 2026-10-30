import React, { useState } from 'react';
import { 
  Utensils, 
  Luggage, 
  Info, 
  Bus, 
  Coins, 
  Languages, 
  Calendar, 
  CheckCircle2, 
  Circle 
} from 'lucide-react';
import { Itinerary } from '../types';

interface TripGuideProps {
  itinerary: Itinerary;
}

export const TripGuide: React.FC<TripGuideProps> = ({ itinerary }) => {
  const [packedItems, setPackedItems] = useState<Record<number, boolean>>({});

  const togglePacked = (idx: number) => {
    setPackedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="space-y-8">
      {/* City Logistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-2">
            <Bus className="w-4 h-4 text-amber-600" />
            <span>Transit & Navigation</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {itinerary.transitTip}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-2">
            <Coins className="w-4 h-4 text-amber-600" />
            <span>Currency & Budget Estimate</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            <strong className="text-stone-800">Currency:</strong> {itinerary.localCurrency}
            <br />
            <strong className="text-stone-800">Daily Estimate:</strong> {itinerary.dailyBudgetEst}
          </p>
        </div>
      </div>

      {/* Culinary Highlights */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
          <Utensils className="w-5 h-5 text-amber-600" />
          <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
            Iconic Culinary Highlights
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {itinerary.culinaryHighlights.map((dish, idx) => (
            <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-stone-900 text-base mb-1.5">
                  {dish.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {dish.description}
                </p>
              </div>
              <div className="pt-2 border-t border-stone-200/60 text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700">Recommended spot: </span>
                <span>{dish.whereToTry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packing Essentials & Practical Etiquette */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Packing Checklist */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
            <Luggage className="w-5 h-5 text-amber-600" />
            <h3 className="font-display text-lg font-bold text-stone-900">
              Trip Packing Essentials
            </h3>
          </div>

          <ul className="space-y-3">
            {itinerary.packingEssentials.map((item, idx) => {
              const isChecked = Boolean(packedItems[idx]);
              return (
                <li
                  key={idx}
                  onClick={() => togglePacked(idx)}
                  className={`flex items-start gap-3 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-200 text-stone-400 line-through'
                      : 'bg-stone-50 border-stone-200/70 text-stone-700 hover:bg-stone-100/70'
                  }`}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  )}
                  <span className="leading-relaxed">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Local Tips & Etiquette */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
            <Info className="w-5 h-5 text-amber-600" />
            <h3 className="font-display text-lg font-bold text-stone-900">
              Local Insider Tips
            </h3>
          </div>

          <ul className="space-y-3">
            {itinerary.practicalTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs text-stone-700 leading-relaxed">
                <span className="font-mono text-stone-400 font-semibold shrink-0">
                  0{idx + 1}.
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
