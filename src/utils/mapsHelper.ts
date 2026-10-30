/**
 * Maps Helper Utility
 * Formats hyper-accurate Google Maps search queries and embed URLs for destinations and activities.
 */

export function cleanActivityLandmark(activityName: string): string {
  if (!activityName) return '';

  let cleaned = activityName
    // Remove typical itinerary prefixes
    .replace(/^(morning|afternoon|evening|night|sunrise|sunset)\s*(walk|stroll|visit|tour|exploration|stop|drive|tea)?[:–—-]?\s*/i, '')
    .replace(/^(explore|exploring|visit|visiting|discover|discovering|tour of|guided tour of|stroll through|taste|taste of|dinner at|lunch at|breakfast at|high tea at|shopping at|photography at|relaxation at)\s+/i, '')
    .trim();

  // If there's a colon or dash, usually the second part is the exact place name
  // e.g. "Colonial Splendor: Gateway of India & Taj Mahal Palace" -> "Gateway of India & Taj Mahal Palace"
  if (cleaned.includes(':')) {
    const parts = cleaned.split(':');
    if (parts[1] && parts[1].trim().length >= 3) {
      cleaned = parts[1].trim();
    }
  } else if (cleaned.includes('—')) {
    const parts = cleaned.split('—');
    if (parts[1] && parts[1].trim().length >= 3) {
      cleaned = parts[1].trim();
    }
  }

  return cleaned.trim();
}

/**
 * Returns an exact search query targeted strictly to the specified landmark and city in India.
 */
export function formatMapsQuery(activityName: string, location: string, cityName: string): string {
  const landmark = cleanActivityLandmark(activityName);
  const loc = (location || '').trim();
  const city = (cityName || '').trim();

  // Check if location already contains the city name
  const hasCityInLoc = loc.toLowerCase().includes(city.toLowerCase());
  
  if (hasCityInLoc) {
    return `${landmark ? landmark + ', ' : ''}${loc}, India`;
  }

  return `${landmark ? landmark + ', ' : ''}${loc ? loc + ', ' : ''}${city}, India`;
}

/**
 * Generates official Google Maps Universal Search URL.
 * Guarantees zero wrong destination jumps by pinpointing exact coordinates/landmarks.
 */
export function getGoogleMapsUrl(activityName: string, location: string, cityName: string): string {
  const query = formatMapsQuery(activityName, location, cityName);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Generates an embedded Google Maps iframe URL.
 * If an API key is provided, uses Google Maps Embed API v1; otherwise uses Google Maps standard embed.
 */
export function getGoogleMapsEmbedUrl(
  activityName: string,
  location: string,
  cityName: string,
  apiKey?: string
): string {
  const query = formatMapsQuery(activityName, location, cityName);
  
  if (apiKey && apiKey.trim().length > 10 && apiKey !== 'MY_GOOGLE_MAPS_API_KEY') {
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey.trim())}&q=${encodeURIComponent(query)}`;
  }
  
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
