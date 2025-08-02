import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JamfInspectorConfig } from '../types/models.ts';

/**
 * Loads and validates the Jamf Inspector config file
 * @returns { config: JamfInspectorConfig, configFileLocation: string }
 */
export function loadConfig(): { config: JamfInspectorConfig; configFileLocation: string } {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const configFileLocation = path.resolve(__dirname, 'jamf-inspector.config.json');
  const raw = fs.readFileSync(configFileLocation, 'utf-8');
  const config: JamfInspectorConfig = JSON.parse(raw);
  // TODO: Add runtime validation if needed
  return { config, configFileLocation };
}
