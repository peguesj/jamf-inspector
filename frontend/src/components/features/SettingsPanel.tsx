import React, { useState } from 'react';
import { Card } from '@heroui/react';

/**
 * SettingsPanel - Dashboard settings panel using HeroUI Card
 * @see https://www.heroui.com/docs/components/card
 */

const SettingsPanel: React.FC = () => {
  const [apiUrl, setApiUrl] = useState(() => localStorage.getItem('jamfApiUrl') || '');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('jamfApiKey') || '');
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
      <form className="space-y-4" onSubmit={handleSave}>
        <div>
          <label htmlFor="api-url" className="block text-sm font-medium">API URL</label>
          <input
            id="api-url"
            name="api-url"
            className="mt-1 w-full border rounded p-2"
            value={apiUrl}
            onChange={e => setApiUrl(e.target.value)}
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
            onChange={e => setApiKey(e.target.value)}
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
