import type { JamfServerInfo } from '../../../types/models';

/**
 * Fetch Jamf Pro server info (name, version, last updated, etc.)
 * @returns {Promise<JamfServerInfo>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchServerInfo(): Promise<JamfServerInfo> {
  const res = await fetch('/api/server');
  if (!res.ok) throw new Error('Failed to fetch server info');
  return res.json();
}
