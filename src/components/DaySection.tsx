import React from 'react';
import { Calendar, Compass, MapPin, Sparkles } from 'lucide-react';
import { DayPlan } from '../types';
import { ActivityCard } from './ActivityCard';

interface DaySectionProps {
  day: DayPlan;
  cityName: string;
  checkedActivities: Record<string, boolean>;
  onToggleCheck: (activityId: string) => void;
  activityNotes: Record<string, string>;
  onSaveNote: (activityId: string, note: string) => void;
}

export const DaySection: React.FC<DaySectionProps> = ({
  day,
  cityName,
  checkedActivities,
  onToggleCheck,
  activityNotes,
  onSaveNote,
}) => {
  const completedCount = day.schedule.filter((act) => checkedActivities[act.id]).length;

  return (
    <section className="print-break-inside-avoid space-y-6">
      {/* Day Overview Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
              Day {day.dayNumber}
            </span>
            <span className="text-stone-400 text-xs font-medium">
              {day.theme}
            </span>
          </div>

          <div className="text-xs font-mono text-stone-400">
            {completedCount} of {day.schedule.length} visited
          </div>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
          {day.title}
        </h3>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-300 pt-2 border-t border-stone-800">
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-stone-400">Highlight:</span>
            <span className="text-stone-200 font-medium">{day.dayHighlight}</span>
          </div>

          <span className="text-stone-700 hidden sm:inline">·</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-stone-400">Hub:</span>
            <span className="text-stone-200 font-medium">{day.recommendedNeighborhood}</span>
          </div>
        </div>
      </div>

      {/* Activities Timeline */}
      <div className="relative pl-4 sm:pl-6 space-y-4 before:absolute before:left-[19px] sm:before:left-[27px] before:top-4 before:bottom-4 before:w-[2px] before:bg-stone-200">
        {day.schedule.map((activity, index) => (
          <div key={activity.id || index} className="relative pl-6 sm:pl-8">
            {/* Timeline node dot */}
            <div
              className={`absolute -left-[5px] sm:-left-[5px] top-6 w-3 h-3 rounded-full border-2 border-white transition-colors ${
                checkedActivities[activity.id]
                  ? 'bg-emerald-500 ring-2 ring-emerald-200'
                  : 'bg-stone-400 ring-2 ring-stone-100'
              }`}
            />

            <ActivityCard
              activity={activity}
              cityName={cityName}
              isChecked={Boolean(checkedActivities[activity.id])}
              onToggleCheck={onToggleCheck}
              userNote={activityNotes[activity.id] || ''}
              onSaveNote={onSaveNote}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
