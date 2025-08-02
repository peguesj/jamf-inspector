import type { JamfUser } from '../../../types/models';
/**
 * Fetch all Jamf Pro users
 * @returns {Promise<JamfUser[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchUsers(): Promise<JamfUser[]> {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}
