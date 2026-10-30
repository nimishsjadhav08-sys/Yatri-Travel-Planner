import React, { useState } from 'react';
import { 
  Bookmark, 
  BookmarkCheck, 
  Printer, 
  Copy, 
  Check, 
  Share2, 
  Calendar, 
  MapPin, 
  Compass, 
  ArrowLeft 
} from 'lucide-react';
import { Itinerary } from '../types';
import { DaySection } from './DaySection';
import { TripGuide } from './TripGuide';

interface ItineraryViewProps {
  itinerary: Itinerary;
  isSaved: boolean;
  onSave: () => void;
  onNewSearch: () => void;
  checkedActivities: Record<string, boolean>;
  onToggleCheck: (activityId: string) => void;
  activityNotes: Record<string, string>;
  onSaveNote: (activityId: string, note: string) => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({
  itinerary,
  isSaved,
  onSave,
  onNewSearch,
  checkedActivities,
  onToggleCheck,
  activityNotes,
  onSaveNote,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    let md = `# ${itinerary.days.length}-Day Travel Itinerary: ${itinerary.cityName}, ${itinerary.country}\n\n`;
    md += `*${itinerary.tagline}*\n\n`;
    md += `${itinerary.overview}\n\n`;
    md += `**Best Time to Visit:** ${itinerary.bestTimeToVisit}\n`;
    md += `**Local Currency:** ${itinerary.localCurrency}\n`;
    md += `**Transit Tip:** ${itinerary.transitTip}\n\n`;
    md += `---\n\n`;

    itinerary.days.forEach((day) => {
      md += `## Day ${day.dayNumber}: ${day.title}\n`;
      md += `*Theme: ${day.theme} | Highlight: ${day.dayHighlight}*\n\n`;

      day.schedule.forEach((act) => {
        md += `### ${act.time} - ${act.activity}\n`;
        md += `- **Location:** ${act.location}\n`;
        md += `- **Category:** ${act.category} | **Duration:** ${act.duration} | **Cost:** ${act.costEstimate}\n`;
        md += `- **Details:** ${act.description}\n`;
        if (act.insiderTip) {
          md += `- **Pro Tip:** ${act.insiderTip}\n`;
        }
        md += `\n`;
      });
      md += `\n`;
    });

    md += `## Culinary Highlights\n`;
    itinerary.culinaryHighlights.forEach((dish) => {
      md += `- **${dish.name}**: ${dish.description} (Try at: ${dish.whereToTry})\n`;
    });

    navigator.clipboard.writeText(md).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Top back navigation and utility actions */}
      <div className="no-print flex items-center justify-between gap-4 pt-2">
        <button
          onClick={onNewSearch}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change destination</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onSave}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              isSaved
                ? 'bg-amber-50 border-amber-300 text-amber-900 font-semibold'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
                <span>Saved to Trips</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-stone-400" />
                <span>Save Trip</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg text-xs sm:text-sm font-medium text-stone-700 transition-colors cursor-pointer"
            title="Copy as Markdown"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg text-xs sm:text-sm font-medium text-stone-700 transition-colors cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-4 h-4 text-stone-400" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Itinerary Hero Header */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
        <div className="mb-3 flex items-center gap-2 text-xs text-stone-500 font-medium">
          <span className="font-semibold text-stone-700">{itinerary.country}</span>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
            {itinerary.days.length}-Day Structured Plan
          </span>
          <span aria-hidden="true">·</span>
          <span>{itinerary.pace}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-3 text-balance">
          {itinerary.cityName}
        </h1>

        <p className="text-base sm:text-lg font-medium text-amber-800/90 mb-4 font-display">
          {itinerary.tagline}
        </p>

        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl mb-6">
          {itinerary.overview}
        </p>

        {/* Clean unboxed metadata with subtle typographic separators */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600">
          <div>
            <span className="font-semibold text-stone-800">Best Season: </span>
            <span>{itinerary.bestTimeToVisit}</span>
          </div>

          <span className="text-stone-300 hidden sm:inline" aria-hidden="true">·</span>

          <div>
            <span className="font-semibold text-stone-800">Currency: </span>
            <span>{itinerary.localCurrency}</span>
          </div>

          <span className="text-stone-300 hidden sm:inline" aria-hidden="true">·</span>

          <div>
            <span className="font-semibold text-stone-800">Est. Daily Budget: </span>
            <span>{itinerary.dailyBudgetEst}</span>
          </div>
        </div>
      </div>

      {/* Segmented Filter Navigation Tabs */}
      <div className="no-print flex items-center gap-1.5 p-1.5 bg-stone-200/70 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
            activeTab === 'all'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          All {itinerary.days.length} Days
        </button>

        {itinerary.days.map((day) => {
          const tabKey = `day-${day.dayNumber}`;
          const isActive = activeTab === tabKey;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setActiveTab(tabKey)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Day {day.dayNumber}
            </button>
          );
        })}

        <button
          onClick={() => setActiveTab('guide')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
            activeTab === 'guide'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Trip Guide & Logistics
        </button>
      </div>

      {/* Structured Day Plan Content */}
      <div className="space-y-10">
        {activeTab === 'all' && (
          <>
            {itinerary.days.map((day) => (
              <DaySection
                key={day.dayNumber}
                day={day}
                cityName={itinerary.cityName}
                checkedActivities={checkedActivities}
                onToggleCheck={onToggleCheck}
                activityNotes={activityNotes}
                onSaveNote={onSaveNote}
              />
            ))}
            <div className="pt-6 border-t border-stone-200">
              <TripGuide itinerary={itinerary} />
            </div>
          </>
        )}

        {activeTab !== 'all' && activeTab !== 'guide' && (() => {
          const dayNum = parseInt(activeTab.replace('day-', ''), 10);
          const selectedDay = itinerary.days.find((d) => d.dayNumber === dayNum);
          if (!selectedDay) return null;
          return (
            <DaySection
              day={selectedDay}
              cityName={itinerary.cityName}
              checkedActivities={checkedActivities}
              onToggleCheck={onToggleCheck}
              activityNotes={activityNotes}
              onSaveNote={onSaveNote}
            />
          );
        })()}

        {activeTab === 'guide' && <TripGuide itinerary={itinerary} />}
      </div>
    </div>
  );
};
