import type { JamfInspectorConfig } from '../../types/models';

export const defaultConfig: JamfInspectorConfig = {
  backendApiUrl: 'http://localhost:3000',
  frontendBaseUrl: 'http://localhost:5173',
  jamfApiUrl: 'https://mdm.19parkinc.com:8443',
  jamfApiKey: '',
  defaultTheme: 'system',
  enableNotifications: true,
  configFileLocation: '/config/jamf-inspector.config.json',
};

/**
 * Loads Jamf Inspector config from backend API or .json file
 * @returns {Promise<{ config: JamfInspectorConfig; configFileLocation: string }>}
 */
export async function loadConfig(): Promise<{ config: JamfInspectorConfig; configFileLocation: string }> {
  try {
    // Determine host for backend API
    let backendHost = window.location.hostname;
    if (backendHost === 'localhost' || backendHost === '127.0.0.1') {
      // Use actual IP if available
      backendHost = window.location.host.split(':')[0] || backendHost;
    }
    const backendPort = process.env.NODE_ENV === 'development' ? '3000' : window.location.port;
    const backendApiUrl = `http://${backendHost}:${backendPort}/api/config`;
    const res = await fetch(backendApiUrl);
    if (!res.ok) throw new Error('Failed to load config');
    return await res.json();
  } catch {
    // Fallback to default config
    return { config: defaultConfig, configFileLocation: defaultConfig.configFileLocation || '/config/jamf-inspector.config.json' };
  }
}
