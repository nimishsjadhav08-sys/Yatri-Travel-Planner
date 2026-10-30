export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export type ActivityCategory = 'culture' | 'sightseeing' | 'food' | 'nature' | 'shopping' | 'relaxation';

export interface Activity {
  id: string;
  time: string;
  timeOfDay: TimeOfDay;
  activity: string;
  description: string;
  location: string;
  category: ActivityCategory;
  duration: string;
  costEstimate: string;
  insiderTip: string;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  theme: string;
  schedule: Activity[];
  dayHighlight: string;
  recommendedNeighborhood: string;
}

export interface CulinaryItem {
  name: string;
  description: string;
  whereToTry: string;
}

export interface Itinerary {
  id: string;
  cityName: string;
  country: string;
  tagline: string;
  overview: string;
  bestTimeToVisit: string;
  localCurrency: string;
  language: string;
  transitTip: string;
  dailyBudgetEst: string;
  pace: string;
  vibe: string;
  createdAt: string;
  days: DayPlan[];
  packingEssentials: string[];
  culinaryHighlights: CulinaryItem[];
  practicalTips: string[];
}

export interface ItineraryGenerationRequest {
  city: string;
  daysCount?: number;
  vibe?: string;
  pace?: string;
  travelerType?: string;
}
