import type { JamfProfile } from '../../../types/models';

/**
 * Fetch all Jamf Pro configuration profiles
 * @returns {Promise<JamfProfile[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchProfiles(): Promise<JamfProfile[]> {
  const res = await fetch('/api/profiles');
  if (!res.ok) throw new Error('Failed to fetch profiles');
  return res.json();
}
