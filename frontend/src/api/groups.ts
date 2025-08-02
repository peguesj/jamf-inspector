import type { JamfGroup } from '../../../types/models';
/**
 * Fetch all Jamf Pro groups
 * @returns {Promise<JamfGroup[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchGroups(): Promise<JamfGroup[]> {
  const res = await fetch('/api/groups');
  if (!res.ok) throw new Error('Failed to fetch groups');
  return res.json();
}
