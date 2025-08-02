import type { JamfPolicy } from '../../../types/models';

/**
 * Fetch all Jamf Pro policies
 * @returns {Promise<JamfPolicy[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchPolicies(): Promise<JamfPolicy[]> {
  const res = await fetch('/api/policies');
  if (!res.ok) throw new Error('Failed to fetch policies');
  return res.json();
}
