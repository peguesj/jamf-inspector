import React, { useState } from 'react';
import { FaCloud } from 'react-icons/fa';

/**
 * QwenSettings - Settings for Qwen LLM provider
 * @see https://help.aliyun.com/document_detail/2583697.html
 */
const QwenSettings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiUrl, setApiUrl] = useState('https://dashscope.aliyuncs.com/api/v1');
  const [model, setModel] = useState('qwen-turbo');
  const [testStatus, setTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      const res = await fetch(`${apiUrl}/models`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      if (!res.ok) throw new Error('Connection failed');
      const data = await res.json();
      setTestStatus(`Success! Models: ${data.data?.map((m: any) => m.id).join(', ')}`);
    } catch (err) {
      setTestStatus('Failed to connect.');
    }
    setTesting(false);
  };

  return (
    <div className="p-4 border rounded">
      <div className="flex items-center gap-2 mb-2 text-lg font-semibold"><FaCloud /> Qwen</div>
      <label className="block text-sm font-medium">API Key</label>
      <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="..." />
      <label className="block text-sm font-medium">API URL</label>
      <input type="text" value={apiUrl} onChange={e => setApiUrl(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="https://dashscope.aliyuncs.com/api/v1" />
      <label className="block text-sm font-medium">Model</label>
      <input type="text" value={model} onChange={e => setModel(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="qwen-turbo" />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? 'Testing...' : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://help.aliyun.com/document_detail/2583697.html" target="_blank" rel="noopener noreferrer" className="underline">Qwen API Docs</a></div>
    </div>
  );
};

export default QwenSettings;
