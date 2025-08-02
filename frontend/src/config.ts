import { JamfInspectorConfig } from '../../types/models';

/**
 * Loads Jamf Inspector config from backend API
 * @returns {Promise<{ config: JamfInspectorConfig; configFileLocation: string }>}
 */
export async function loadConfig(): Promise<{ config: JamfInspectorConfig; configFileLocation: string }> {
  const res = await fetch('/api/config');
  if (!res.ok) throw new Error('Failed to load config');
  return res.json();
}
