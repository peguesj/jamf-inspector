import type { JamfComputer } from '../../../types/models';
/**
 * Fetch all Jamf Pro devices
 * @returns {Promise<JamfComputer[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchDevices(): Promise<JamfComputer[]> {
  const res = await fetch('/api/devices');
  if (!res.ok) throw new Error('Failed to fetch devices');
  return res.json();
}
