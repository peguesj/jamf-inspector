import React, { useState } from 'react';
import { SiOllama } from 'react-icons/si';

/**
 * OllamaSettings - Settings for Ollama LLM provider
 * @see https://github.com/ollama/ollama/blob/main/docs/api.md
 */
const OllamaSettings: React.FC = () => {
  const defaultUrl = 'http://localhost';
  const defaultPort = '11434';
  const [url, setUrl] = useState(() => localStorage.getItem('ollamaUrl') || defaultUrl);
  const [port, setPort] = useState(() => localStorage.getItem('ollamaPort') || defaultPort);
  const [models, setModels] = useState<string[]>([]);
  const [testStatus, setTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      const res = await fetch(`${url}:${port}/api/tags`);
      if (!res.ok) throw new Error('Connection failed');
      const data = await res.json();
      setModels(data.models ? data.models.map((m: any) => m.name) : []);
      setTestStatus('Success! Models loaded.');
    } catch (err) {
      setTestStatus('Failed to connect.');
      setModels([]);
    }
    setTesting(false);
  };

  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold"><SiOllama /> Ollama</div>
      <label className="block text-sm font-medium">URL</label>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="http://localhost" />
      <label className="block text-sm font-medium">Port</label>
      <input type="text" value={port} onChange={e => setPort(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="11434" />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? 'Testing...' : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      {models.length > 0 && (
        <div className="mt-2">
          <label className="block text-sm font-medium">Available Models</label>
          <ul className="list-disc ml-6">
            {models.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </div>
      )}
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://github.com/ollama/ollama/blob/main/docs/api.md" target="_blank" rel="noopener noreferrer" className="underline">Ollama API Docs</a></div>
    </div>
  );
};

export default OllamaSettings;
