import { Itinerary } from '../types';

const STORAGE_KEY = 'wander3_saved_itineraries_v1';
const CHECKED_ACTIVITIES_KEY = 'wander3_checked_activities_v1';
const ACTIVITY_NOTES_KEY = 'wander3_activity_notes_v1';

export function getSavedItineraries(): Itinerary[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to load saved itineraries from localStorage', err);
    return [];
  }
}

export function saveItinerary(itinerary: Itinerary): boolean {
  try {
    const current = getSavedItineraries();
    const existingIndex = current.findIndex((item) => item.id === itinerary.id || (item.cityName.toLowerCase() === itinerary.cityName.toLowerCase() && item.days.length === itinerary.days.length));
    
    let updated: Itinerary[];
    if (existingIndex >= 0) {
      updated = [...current];
      updated[existingIndex] = itinerary;
    } else {
      updated = [itinerary, ...current];
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to save itinerary', err);
    return false;
  }
}

export function deleteSavedItinerary(id: string): Itinerary[] {
  try {
    const current = getSavedItineraries();
    const updated = current.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to delete itinerary', err);
    return [];
  }
}

export function getCheckedActivities(itineraryId: string): Record<string, boolean> {
  try {
    const data = localStorage.getItem(`${CHECKED_ACTIVITIES_KEY}_${itineraryId}`);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function toggleCheckedActivity(itineraryId: string, activityId: string): Record<string, boolean> {
  try {
    const checked = getCheckedActivities(itineraryId);
    checked[activityId] = !checked[activityId];
    localStorage.setItem(`${CHECKED_ACTIVITIES_KEY}_${itineraryId}`, JSON.stringify(checked));
    return checked;
  } catch {
    return {};
  }
}

export function getActivityNotes(itineraryId: string): Record<string, string> {
  try {
    const data = localStorage.getItem(`${ACTIVITY_NOTES_KEY}_${itineraryId}`);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveActivityNote(itineraryId: string, activityId: string, note: string): Record<string, string> {
  try {
    const notes = getActivityNotes(itineraryId);
    if (note.trim()) {
      notes[activityId] = note.trim();
    } else {
      delete notes[activityId];
    }
    localStorage.setItem(`${ACTIVITY_NOTES_KEY}_${itineraryId}`, JSON.stringify(notes));
    return notes;
  } catch {
    return {};
  }
}
