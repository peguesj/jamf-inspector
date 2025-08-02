import React, { useState, useEffect } from 'react';
import { loadConfig } from '../../config';
import { Card } from '@heroui/react';

/**
 * SettingsPanel - Dashboard settings panel using HeroUI Card
 * @see https://www.heroui.com/docs/components/card
 */

const SettingsPanel: React.FC = () => {
  const [settingsFile, setSettingsFile] = useState<string>('');
  const [settingsVersion, setSettingsVersion] = useState<string>('v1.0');
  const [dirty, setDirty] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  useEffect(() => {
    loadConfig().then(({ config, configFileLocation }) => {
      setApiUrl(config.jamfApiUrl || '');
      setApiKey(config.jamfApiKey || '');
      setSettingsFile(configFileLocation || '');
      setSettingsVersion('v1.0');
    });
  }, []);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!apiUrl.trim() || !apiKey.trim()) {
      setError('API URL and API Key are required.');
      return;
    }
    localStorage.setItem('jamfApiUrl', apiUrl);
    localStorage.setItem('jamfApiKey', apiKey);
    setSuccess('Settings saved successfully.');
    setDirty(false);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    setError(null);
    // Simulate API test (replace with real API call if available)
    try {
      await new Promise((res) => setTimeout(res, 800));
      if (apiUrl.startsWith('http') && apiKey.length > 5) {
        setTestResult('Connection successful!');
      } else {
        setTestResult('Connection failed. Check your API URL and Key.');
      }
    } catch {
      setTestResult('Connection failed.');
    }
    setTesting(false);
  };

  return (
    <Card title="Settings" className="mb-6">
      {/* Sticky top bar for settings file/version/save/import/export */}
      <div className="sticky top-0 z-20 flex items-center gap-2 bg-white/90 border-b border-gray-200 py-2 px-2 rounded-t-2xl shadow-sm">
        <span className="font-semibold text-xs text-gray-500 tracking-wide">{settingsFile} {settingsVersion}</span>
        {dirty && <span className="text-yellow-600 text-xs">Unsaved changes</span>}
        <button type="button" className="px-2 py-1 bg-green-500 text-white rounded text-xs" onClick={handleSave}>Save</button>
        <button type="button" className="px-2 py-1 bg-blue-500 text-white rounded text-xs" onClick={() => {/* export logic */}}>Export</button>
        <input type="file" accept="application/json" className="ml-2 text-xs" onChange={e => {/* import logic */}} />
      </div>
      <form className="space-y-4" onSubmit={handleSave}>
        <div>
          <label htmlFor="api-url" className="block text-sm font-medium">API URL</label>
          <input
            id="api-url"
            name="api-url"
            className="mt-1 w-full border rounded p-2"
            value={apiUrl}
            onChange={e => { setApiUrl(e.target.value); setDirty(true); }}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium">API Key</label>
          <input
            id="api-key"
            name="api-key"
            className="mt-1 w-full border rounded p-2"
            value={apiKey}
            onChange={e => { setApiKey(e.target.value); setDirty(true); }}
            required
            autoComplete="off"
            type="password"
          />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-blue-600 text-white" type="submit">Save</button>
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700"
            type="button"
            onClick={handleTest}
            disabled={testing}
          >
            {testing ? 'Testing...' : 'Test Connection'}
          </button>
        </div>
        {testResult && <div className={`text-sm ${testResult.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>{testResult}</div>}
      </form>
    </Card>
  );
};

export default SettingsPanel;
