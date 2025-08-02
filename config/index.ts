import fs from 'fs';
import path from 'path';
import { JamfInspectorConfig } from '../types/models';

/**
 * Loads and validates the Jamf Inspector config file
 * @returns { config: JamfInspectorConfig, configFileLocation: string }
 */
export function loadConfig(): { config: JamfInspectorConfig; configFileLocation: string } {
  const configFileLocation = path.resolve(__dirname, 'jamf-inspector.config.json');
  const raw = fs.readFileSync(configFileLocation, 'utf-8');
  const config: JamfInspectorConfig = JSON.parse(raw);
  // TODO: Add runtime validation if needed
  return { config, configFileLocation };
}
