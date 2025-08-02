import React, { useState } from 'react';
import { Spinner } from '@heroui/react';

/**
 * JamfServerSettings - Jamf Pro server connection settings
 * @see https://developer.jamf.com/jamf-pro/reference/classic-api
 */
const JamfServerSettings: React.FC = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('8443');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [testing, setTesting] = useState(false);
  const [testStatus, setTestStatus] = useState('');

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      // Example: test Jamf API connection
      const res = await fetch(`${host}:${port}/JSSResource/buildings`, {
        headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` },
      });
      if (!res.ok) throw new Error('Connection failed');
      setTestStatus('Success!');
    } catch (err) {
      setTestStatus('Failed to connect.');
    }
    setTesting(false);
  };

  return (
    <form className="space-y-4">
      <label className="block text-sm font-medium">Host</label>
      <input type="text" value={host} onChange={e => setHost(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="https://jamf.example.com" />
      <label className="block text-sm font-medium">Port</label>
      <input type="text" value={port} onChange={e => setPort(e.target.value)} className="w-full rounded border px-2 py-1" placeholder="8443" />
      <label className="block text-sm font-medium">API Username</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full rounded border px-2 py-1" />
      <label className="block text-sm font-medium">API Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded border px-2 py-1" />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? <Spinner size="sm" /> : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://developer.jamf.com/jamf-pro/reference/classic-api" target="_blank" rel="noopener noreferrer" className="underline">Jamf Pro API Docs</a></div>
    </form>
  );
};

export default JamfServerSettings;
