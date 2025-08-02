import type { JamfPatch } from '../../../types/models';

/**
 * Fetch all Jamf Pro patches
 * @returns {Promise<JamfPatch[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchPatches(): Promise<JamfPatch[]> {
  const res = await fetch('/api/patches');
  if (!res.ok) throw new Error('Failed to fetch patches');
  return res.json();
}
