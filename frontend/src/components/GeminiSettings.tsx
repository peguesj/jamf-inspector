import React, { useState } from 'react';
import { SiGoogle } from 'react-icons/si';

/**
 * GeminiSettings - Settings for Gemini LLM provider
 * @see https://ai.google.dev/api/rest
 */
const GeminiSettings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiUrl, setApiUrl] = useState('https://generativelanguage.googleapis.com/v1beta/models');
  const [model, setModel] = useState('gemini-pro');
  const [testStatus, setTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      const res = await fetch(`${apiUrl}?key=${apiKey}`);
      if (!res.ok) throw new Error('Connection failed');
      const data = await res.json();
      setTestStatus(`Success! Models: ${data.models?.map((m: any) => m.name).join(', ')}`);
    } catch (err) {
      setTestStatus('Failed to connect.');
    }
    setTesting(false);
  };

  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold"><SiGoogle /> Gemini</div>
      <label className="block text-sm font-medium">API Key</label>
      <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="..." />
      <label className="block text-sm font-medium">API URL</label>
      <input type="text" value={apiUrl} onChange={e => setApiUrl(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="https://generativelanguage.googleapis.com/v1beta/models" />
      <label className="block text-sm font-medium">Model</label>
      <input type="text" value={model} onChange={e => setModel(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="gemini-pro" />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? 'Testing...' : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://ai.google.dev/api/rest" target="_blank" rel="noopener noreferrer" className="underline">Gemini API Docs</a></div>
    </div>
  );
};

export default GeminiSettings;
