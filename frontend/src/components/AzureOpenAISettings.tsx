import React, { useState } from 'react';
import { FaMicrosoft } from 'react-icons/fa';

/**
 * AzureOpenAISettings - Settings for Azure OpenAI provider
 * @see https://learn.microsoft.com/en-us/azure/ai-services/openai/reference
 */
const AzureOpenAISettings: React.FC = () => {
  const [endpoint, setEndpoint] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [deployment, setDeployment] = useState('');
  const [testStatus, setTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      const res = await fetch(`${endpoint}/openai/deployments?api-version=2023-05-15`, {
        headers: { 'api-key': apiKey },
      });
      if (!res.ok) throw new Error('Connection failed');
      const data = await res.json();
      setTestStatus(`Success! Deployments: ${data.value?.map((d: any) => d.name).join(', ')}`);
    } catch (err) {
      setTestStatus('Failed to connect.');
    }
    setTesting(false);
  };

  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold"><FaMicrosoft /> Azure OpenAI</div>
      <label className="block text-sm font-medium">Endpoint</label>
      <input type="text" value={endpoint} onChange={e => setEndpoint(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="https://your-resource.openai.azure.com" />
      <label className="block text-sm font-medium">API Key</label>
      <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} className="w-full rounded border px-2 py-1" />
      <label className="block text-sm font-medium">Deployment Name</label>
      <input type="text" value={deployment} onChange={e => setDeployment(e.target.value)} className="w-full rounded border px-2 py-1" />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? 'Testing...' : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/reference" target="_blank" rel="noopener noreferrer" className="underline">Azure OpenAI API Docs</a></div>
    </div>
  );
};

export default AzureOpenAISettings;
