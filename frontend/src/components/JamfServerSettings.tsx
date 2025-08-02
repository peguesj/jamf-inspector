import React, { useState } from 'react';
import { Spinner } from '@heroui/react';

/**
 * JamfServerSettings - Jamf Pro server connection settings
 * @see https://developer.jamf.com/jamf-pro/reference/classic-api
 */
const JamfServerSettings: React.FC = () => {
  // Load config from localStorage or default
  const defaultHost = 'https://mdm.19parkinc.com';
  const defaultPort = '8443';
  const defaultUsername = 'jeremiah';
  const defaultPassword = 'J3r3miah!';
  const [host, setHost] = useState(() => localStorage.getItem('jamfHost') || defaultHost);
  const [port, setPort] = useState(() => localStorage.getItem('jamfPort') || defaultPort);
  const [username, setUsername] = useState(() => localStorage.getItem('jamfUsername') || defaultUsername);
  const [password, setPassword] = useState(() => localStorage.getItem('jamfPassword') || defaultPassword);
  const [testing, setTesting] = useState(false);
  const [testStatus, setTestStatus] = useState('');

  const testConnection = async () => {
    setTesting(true);
    setTestStatus('Testing...');
    try {
      // Use backend API at port 3000 for dev
      const backendUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/proxy' : '/api/proxy';
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          baseURL: `${host}:${port}`,
          path: '/JSSResource/buildings',
          method: 'GET',
          username,
          password,
        }),
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
      <input type="text" value={host} onChange={e => setHost(e.target.value)} className="w-full rounded border px-2 py-1" placeholder={defaultHost} />
      <label className="block text-sm font-medium">Port</label>
      <input type="text" value={port} onChange={e => setPort(e.target.value)} className="w-full rounded border px-2 py-1" placeholder={defaultPort} />
      <label className="block text-sm font-medium">API Username</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full rounded border px-2 py-1" placeholder={defaultUsername} />
      <label className="block text-sm font-medium">API Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded border px-2 py-1" placeholder={defaultPassword} />
      <button type="button" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={testConnection} disabled={testing}>
        {testing ? <Spinner size="sm" /> : 'Test Connection'}
      </button>
      <div className="text-xs mt-2">{testStatus}</div>
      <div className="text-xs mt-2 text-gray-500">Reference: <a href="https://developer.jamf.com/jamf-pro/reference/classic-api" target="_blank" rel="noopener noreferrer" className="underline">Jamf Pro API Docs</a></div>
    </form>
  );
};

export default JamfServerSettings;
