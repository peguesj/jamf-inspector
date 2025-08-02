import type { JamfFeedback } from '../../../types/models';
/**
 * Fetch all Jamf Pro feedback
 * @returns {Promise<JamfFeedback[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchFeedback(): Promise<JamfFeedback[]> {
  const res = await fetch('/api/feedback');
  if (!res.ok) throw new Error('Failed to fetch feedback');
  return res.json();
}
