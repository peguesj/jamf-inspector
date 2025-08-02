


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LLM_PROVIDERS = [
  'Gemini', 'Ollama', 'OpenAI', 'AzureOpenAI', 'DeepSeek', 'Qwen'
];

export const SettingsPanel: React.FC = () => {
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
      <div>
        <label className="block text-sm font-medium text-gray-700">LLM Model</label>
        <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={llmModel} onChange={e => setLlmModel(e.target.value)} placeholder="gpt-4o" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">API Key</label>
        <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="API Key" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">API URL</label>
        <input type="url" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={apiUrl} onChange={e => setApiUrl(e.target.value)} placeholder="https://api.openai.com/v1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Log Level</label>
          <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={logLevel} onChange={e => setLogLevel(e.target.value)} placeholder="info" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Log Location</label>
          <input type="text" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={logLocation} onChange={e => setLogLocation(e.target.value)} placeholder="logs/llm.log" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rate Limit (req/min)</label>
          <input type="number" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={rateLimit} onChange={e => setRateLimit(Number(e.target.value))} min={1} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Token Limit</label>
          <input type="number" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={tokenLimit} onChange={e => setTokenLimit(Number(e.target.value))} min={1} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Timeout (ms)</label>
        <input type="number" className="mt-1 block w-full rounded border-gray-300 shadow-sm" value={timeout} onChange={e => setTimeout(Number(e.target.value))} min={1000} />
      </div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={notificationsEnabled} onChange={e => setNotificationsEnabled(e.target.checked)} />
          <span className="text-sm">Notifications Enabled</span>
        </label>
        <input type="url" className="block w-full rounded border-gray-300 shadow-sm" value={notificationWebhook} onChange={e => setNotificationWebhook(e.target.value)} placeholder="Notification Webhook URL" />
      </div>
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
