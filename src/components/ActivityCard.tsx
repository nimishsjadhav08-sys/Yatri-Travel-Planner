import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  ExternalLink, 
  Check, 
  Lightbulb, 
  Tag, 
  FileEdit, 
  Save, 
  DollarSign,
  Map as MapIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Activity, ActivityCategory } from '../types';
import { getGoogleMapsUrl, getGoogleMapsEmbedUrl, formatMapsQuery } from '../utils/mapsHelper';

interface ActivityCardProps {
  activity: Activity;
  cityName: string;
  isChecked: boolean;
  onToggleCheck: (id: string) => void;
  userNote?: string;
  onSaveNote: (id: string, note: string) => void;
  index: number;
}

const CATEGORY_STYLES: Record<ActivityCategory, { label: string; text: string }> = {
  culture: { label: 'Culture & Heritage', text: 'text-indigo-700' },
  sightseeing: { label: 'Sightseeing', text: 'text-sky-700' },
  food: { label: 'Food & Dining', text: 'text-amber-700' },
  nature: { label: 'Nature & Scenic', text: 'text-emerald-700' },
  shopping: { label: 'Shopping & Crafts', text: 'text-fuchsia-700' },
  relaxation: { label: 'Leisure & Nightlife', text: 'text-rose-700' },
};

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  cityName,
  isChecked,
  onToggleCheck,
  userNote = '',
  onSaveNote,
  index,
}) => {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(userNote);
  const [showMapPreview, setShowMapPreview] = useState(false);

  const categoryMeta = CATEGORY_STYLES[activity.category] || {
    label: activity.category || 'Experience',
    text: 'text-stone-700',
  };

  const formattedQuery = formatMapsQuery(activity.activity, activity.location, cityName);
  const googleMapsUrl = getGoogleMapsUrl(activity.activity, activity.location, cityName);
  const embedMapsUrl = getGoogleMapsEmbedUrl(
    activity.activity, 
    activity.location, 
    cityName, 
    (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY
  );

  const handleSaveNote = () => {
    onSaveNote(activity.id, noteText);
    setIsEditingNote(false);
  };

  return (
    <div
      className={`relative rounded-xl border transition-all duration-200 ${
        isChecked
          ? 'bg-stone-50/70 border-stone-200 opacity-80'
          : 'bg-white border-stone-200 shadow-xs hover:border-stone-300'
      }`}
    >
      <div className="p-5 sm:p-6">
        {/* Top Header: Time, Category & Completion */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
            <span className="flex items-center gap-1.5 font-mono text-stone-900 bg-stone-100 px-2.5 py-1 rounded-md text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-stone-600" />
              <span>{activity.time}</span>
            </span>

            <span className="text-stone-300">·</span>

            <span className="text-stone-500 font-medium">
              {activity.duration}
            </span>

            <span className="text-stone-300">·</span>

            <span className={`font-medium ${categoryMeta.text}`}>
              {categoryMeta.label}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-stone-600 font-mono">
              {activity.costEstimate}
            </span>

            <button
              onClick={() => onToggleCheck(activity.id)}
              className={`p-1.5 rounded-md border text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
                isChecked
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-500'
              }`}
              title={isChecked ? 'Marked as completed' : 'Mark as done'}
            >
              <Check className={`w-3.5 h-3.5 ${isChecked ? 'stroke-[2.5]' : 'opacity-40'}`} />
              <span className="text-[11px] hidden sm:inline">
                {isChecked ? 'Done' : 'Mark done'}
              </span>
            </button>
          </div>
        </div>

        {/* Title and Maps actions */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h4
            className={`font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 ${
              isChecked ? 'line-through text-stone-500' : ''
            }`}
          >
            {activity.activity}
          </h4>

          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
            <button
              onClick={() => setShowMapPreview(!showMapPreview)}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border transition-colors cursor-pointer ${
                showMapPreview
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200'
              }`}
              title="Toggle interactive map preview"
            >
              <MapIcon className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden sm:inline">Preview</span>
              {showMapPreview ? (
                <ChevronUp className="w-3 h-3 text-stone-500" />
              ) : (
                <ChevronDown className="w-3 h-3 text-stone-500" />
              )}
            </button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 transition-colors group"
              title={`Open "${formattedQuery}" on Google Maps`}
            >
              <span>Map</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Location & Neighborhood */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3.5">
          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="font-medium text-stone-700">{activity.location}</span>
          <span className="text-stone-300">·</span>
          <span className="text-stone-400 font-mono text-[11px] truncate max-w-[240px] sm:max-w-md" title={formattedQuery}>
            {formattedQuery}
          </span>
        </div>

        {/* Embedded Interactive Map Preview */}
        {showMapPreview && (
          <div className="mb-4 rounded-xl overflow-hidden border border-amber-200/80 bg-stone-100 shadow-inner">
            <div className="bg-amber-50/80 px-3 py-1.5 border-b border-amber-200/60 flex items-center justify-between text-xs text-amber-900 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Destination: {formattedQuery}</span>
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-800 text-[11px]"
              >
                Directions in Google Maps &rarr;
              </a>
            </div>
            <iframe
              title={`Map of ${formattedQuery}`}
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedMapsUrl}
              className="w-full"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-stone-700 leading-relaxed mb-4">
          {activity.description}
        </p>

        {/* Insider Tip Box */}
        {activity.insiderTip && (
          <div className="bg-amber-50/60 border border-amber-200/60 rounded-lg p-3 text-xs text-amber-950 mb-3">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-900">Local Pro Tip: </span>
                <span>{activity.insiderTip}</span>
              </div>
            </div>
          </div>
        )}

        {/* User Personal Notes Section */}
        <div className="pt-2">
          {isEditingNote ? (
            <div className="mt-2 space-y-2">
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add reservation details, ticket numbers, or personal notes..."
                className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-stone-800 resize-none h-16"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingNote(false)}
                  className="px-2.5 py-1 text-xs text-stone-600 hover:text-stone-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800"
                >
                  <Save className="w-3 h-3" />
                  <span>Save note</span>
                </button>
              </div>
            </div>
          ) : userNote ? (
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-2.5 flex items-start justify-between gap-2 text-xs">
              <div>
                <span className="font-semibold text-stone-600">My Note: </span>
                <span className="text-stone-800">{userNote}</span>
              </div>
              <button
                onClick={() => {
                  setNoteText(userNote);
                  setIsEditingNote(true);
                }}
                className="text-stone-400 hover:text-stone-700 p-1"
                title="Edit note"
              >
                <FileEdit className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingNote(true)}
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-600 font-medium transition-colors"
            >
              <FileEdit className="w-3 h-3" />
              <span>Add personal note</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
