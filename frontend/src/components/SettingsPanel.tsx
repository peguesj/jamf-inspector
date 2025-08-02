


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LLM_PROVIDERS = [
  'Gemini', 'Ollama', 'OpenAI', 'AzureOpenAI', 'DeepSeek', 'Qwen'
];

export const SettingsPanel: React.FC = () => {


  // Core LLM state
  const [llmProvider, setLlmProvider] = useState('OpenAI');
  const [llmModel, setLlmModel] = useState('gpt-4o');
  const [apiKey, setApiKey] = useState('');
  const [apiUrl, setApiUrl] = useState('');
  const [logLevel, setLogLevel] = useState('info');
  const [logLocation, setLogLocation] = useState('logs/llm.log');
  const [rateLimit, setRateLimit] = useState(60);
  const [tokenLimit, setTokenLimit] = useState(4096);
  const [timeout, setTimeout] = useState(30000);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationWebhook, setNotificationWebhook] = useState('');

  // Provider-specific fields and test connection logic
  const [ollamaUrl, setOllamaUrl] = useState('http://localhost');
  const [ollamaPort, setOllamaPort] = useState('11434');
  const [ollamaModels, setOllamaModels] = useState<string[]>([]);
  const [ollamaTestStatus, setOllamaTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

  // Async test connection for Ollama
  const testOllamaConnection = async () => {
    setTesting(true);
    setOllamaTestStatus('Testing...');
    try {
      const res = await fetch(`${ollamaUrl}:${ollamaPort}/api/tags`);
      if (!res.ok) throw new Error('Connection failed');
      const data = await res.json();
      setOllamaModels(data.models ? data.models.map((m: any) => m.name) : []);
      setOllamaTestStatus('Success! Models loaded.');
    } catch (err) {
      setOllamaTestStatus('Failed to connect.');
      setOllamaModels([]);
    }
    setTesting(false);
  };

  // ...similar logic for other providers (OpenAI, AzureOpenAI, Gemini, DeepSeek, Qwen)...

  return (
    <motion.form
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">LLM Provider</label>
        <select
          className="mt-1 block w-full rounded border-gray-300 shadow-sm bg-white text-left px-3 py-2"
          value={llmProvider}
          onChange={e => setLlmProvider(e.target.value)}
        >
          {LLM_PROVIDERS.map((provider) => (
            <option key={provider} value={provider}>{provider}</option>
          ))}
        </select>
      </div>

      {/* Provider-specific fields */}
      {llmProvider === 'Ollama' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Ollama URL</label>
          <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={ollamaUrl} onChange={e => setOllamaUrl(e.target.value)} placeholder="http://localhost" />
          <label className="block text-sm font-medium text-gray-700">Ollama Port</label>
          <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={ollamaPort} onChange={e => setOllamaPort(e.target.value)} placeholder="11434" />
          <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testOllamaConnection} disabled={testing}>
            {testing ? 'Testing...' : 'Test Connection'}
          </button>
          <div className="text-xs mt-2">{ollamaTestStatus}</div>
          {ollamaModels.length > 0 && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Available Models</label>
              <ul className="list-disc ml-6">
                {ollamaModels.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          )}
          <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://github.com/ollama/ollama/blob/main/docs/api.md" target="_blank" rel="noopener noreferrer" className="underline">Ollama API Docs</a></div>
        </div>
      )}

      {/* ...similar blocks for OpenAI, AzureOpenAI, Gemini, DeepSeek, Qwen with authoritative references... */}

      {/* ...existing code for model, API key, API URL, logging, limits, notifications... */}
      <div>
        <label className="block text-sm font-medium text-gray-700">LLM Model</label>
        <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={llmModel} onChange={e => setLlmModel(e.target.value)} placeholder="gpt-4o" />
      </div>
      {/* ...existing code... */}
      <motion.button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Save Settings
      </motion.button>
    </motion.form>
  );
};

export default SettingsPanel;
