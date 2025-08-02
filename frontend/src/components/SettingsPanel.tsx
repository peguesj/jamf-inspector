// Type declaration for global settings
declare global {
  interface Window {
    __JAMF_DEFAULT_SETTINGS__?: { name: string; settings: any }[];
  }
}



import React, { useState } from 'react';
import { useJamfAuth } from '../hooks/useJamfAuth';
import { FiSettings, FiUser, FiKey, FiLogOut, FiLogIn } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';

const LLM_PROVIDERS = [
  'Gemini', 'Ollama', 'OpenAI', 'AzureOpenAI', 'DeepSeek', 'Qwen'
];

export const SettingsPanel: React.FC = () => {
  const { auth, status, login, logout } = useJamfAuth();
  const [loginForm, setLoginForm] = useState({ baseURL: '', username: '', password: '' });
  const [loginError, setLoginError] = useState<string | null>(null);
  // Top-level settings objects
  const SETTINGS_SECTIONS = [
    {
      key: 'llm',
      label: 'LLM Provider',
      children: [
        { key: 'model', label: 'Model' },
        { key: 'api', label: 'API Key & URL' },
        { key: 'logging', label: 'Logging' },
        { key: 'limits', label: 'Limits' },
        { key: 'notifications', label: 'Notifications' },
      ],
    },
    // Add more top-level objects as needed
  ];
  const [activeSection, setActiveSection] = useState('llm');
  // Load settings configuration from default location first
  const [profiles, setProfiles] = useState<{ name: string; settings: any }[]>(() => {
    // Try to load from /config/settings.json if available, else localStorage
    let defaultProfiles = [{ name: 'Default', settings: {} }];
    try {
      // @ts-ignore
      if (window.__JAMF_DEFAULT_SETTINGS__) {
        defaultProfiles = window.__JAMF_DEFAULT_SETTINGS__;
      }
    } catch {}
    const saved = localStorage.getItem('jamfSettingsProfiles');
    return saved ? JSON.parse(saved) : defaultProfiles;
  });
  const [activeProfile, setActiveProfile] = useState(0);
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
  const [ollamaUrl, setOllamaUrl] = useState('http://localhost');
  const [ollamaPort, setOllamaPort] = useState('11434');
  const [ollamaModels, setOllamaModels] = useState<string[]>([]);
  const [ollamaTestStatus, setOllamaTestStatus] = useState('');
  const [testing, setTesting] = useState(false);

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

  const handleExport = () => {
    const data = JSON.stringify(profiles, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jamf-settings-profiles.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result as string);
        setProfiles(imported);
        setActiveProfile(0);
      } catch {}
    };
    reader.readAsText(file);
  };
  const handleSave = () => {
    const updated = [...profiles];
    updated[activeProfile].settings = {
      llmProvider, llmModel, apiKey, apiUrl, logLevel, logLocation, rateLimit, tokenLimit, timeout, notificationsEnabled, notificationWebhook,
      ollamaUrl, ollamaPort, ollamaModels
    };
    setProfiles(updated);
    localStorage.setItem('jamfSettingsProfiles', JSON.stringify(updated));
  };
  const handleAddProfile = () => {
    setProfiles([...profiles, { name: `Profile ${profiles.length + 1}`, settings: {} }]);
    setActiveProfile(profiles.length);
  };
  const handleSelectProfile = (idx: number) => {
    setActiveProfile(idx);
    const s = profiles[idx].settings;
    setLlmProvider(s.llmProvider || 'OpenAI');
    setLlmModel(s.llmModel || 'gpt-4o');
    setApiKey(s.apiKey || '');
    setApiUrl(s.apiUrl || '');
    setLogLevel(s.logLevel || 'info');
    setLogLocation(s.logLocation || 'logs/llm.log');
    setRateLimit(s.rateLimit || 60);
    setTokenLimit(s.tokenLimit || 4096);
    setTimeout(s.timeout || 30000);
    setNotificationsEnabled(s.notificationsEnabled ?? true);
    setNotificationWebhook(s.notificationWebhook || '');
    setOllamaUrl(s.ollamaUrl || 'http://localhost');
    setOllamaPort(s.ollamaPort || '11434');
    setOllamaModels(s.ollamaModels || []);
  };
  React.useEffect(() => {
    const updated = [...profiles];
    updated[activeProfile].settings = {
      llmProvider, llmModel, apiKey, apiUrl, logLevel, logLocation, rateLimit, tokenLimit, timeout, notificationsEnabled, notificationWebhook,
      ollamaUrl, ollamaPort, ollamaModels
    };
    setProfiles(updated);
    localStorage.setItem('jamfSettingsProfiles', JSON.stringify(updated));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [llmProvider, llmModel, apiKey, apiUrl, logLevel, logLocation, rateLimit, tokenLimit, timeout, notificationsEnabled, notificationWebhook, ollamaUrl, ollamaPort, ollamaModels]);

  // Track dirty state for settings changes
  const [dirty, setDirty] = useState(false);
  React.useEffect(() => {
    setDirty(true);
  }, [llmProvider, llmModel, apiKey, apiUrl, logLevel, logLocation, rateLimit, tokenLimit, timeout, notificationsEnabled, notificationWebhook, ollamaUrl, ollamaPort, ollamaModels]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center gap-4 mb-6">
        <label className="font-semibold">Settings Profile:</label>
        <select value={activeProfile} onChange={e => handleSelectProfile(Number(e.target.value))} className="rounded border px-2 py-1">
          {profiles.map((p, i) => <option key={i} value={i}>{p.name}</option>)}
        </select>
        <button type="button" className="px-2 py-1 bg-green-500 text-white rounded" onClick={handleAddProfile}>Add Profile</button>
      </div>
      <div className="flex w-full h-full">
        {/* Navigation column - best practice UX, float left, no padding, rounded left sides, active bg matches settings */}
        <nav className="w-64 bg-gray-50 border-r-2 rounded-l-2xl flex flex-col gap-0 overflow-hidden" aria-label="Settings Navigation">
          <ul className="flex flex-col gap-0">
            <li>
              <button className={`w-full flex items-center gap-2 px-0 py-3 rounded-l-2xl ${activeSection === 'llm' ? 'bg-white font-bold shadow-sm' : 'hover:bg-gray-100'}`} onClick={() => setActiveSection('llm')} aria-current={activeSection === 'llm' ? 'page' : undefined}>
                <FiSettings className="text-lg ml-4" /> <span className="ml-2">LLM Provider</span>
              </button>
            </li>
            <li>
              <button className={`w-full flex items-center gap-2 px-0 py-3 rounded-l-2xl ${activeSection === 'user' ? 'bg-white font-bold shadow-sm' : 'hover:bg-gray-100'}`} onClick={() => setActiveSection('user')} aria-current={activeSection === 'user' ? 'page' : undefined}>
                <FiUser className="text-lg ml-4" /> <span className="ml-2">User Settings</span>
              </button>
            </li>
            <li>
              <button className={`w-full flex items-center gap-2 px-0 py-3 rounded-l-2xl ${activeSection === 'auth' ? 'bg-white font-bold shadow-sm' : 'hover:bg-gray-100'}`} onClick={() => setActiveSection('auth')} aria-current={activeSection === 'auth' ? 'page' : undefined}>
                <FiKey className="text-lg ml-4" /> <span className="ml-2">Jamf Auth</span>
              </button>
            </li>
          </ul>
          {/* Jamf Auth section */}
          {activeSection === 'auth' && (
            <div className="mt-4 px-4">
              <h3 className="font-bold mb-2 flex items-center gap-2"><FiKey /> Jamf Authentication</h3>
              {status !== 'valid' ? (
                <form className="space-y-2" onSubmit={async e => { e.preventDefault(); setLoginError(null); try { await login({ ...loginForm, type: 'Bearer' }); } catch (err) { setLoginError('Login failed'); } }}>
                  <input type="text" placeholder="Base URL" className="w-full rounded border px-2 py-1" value={loginForm.baseURL} onChange={e => setLoginForm(f => ({ ...f, baseURL: e.target.value }))} required />
                  <input type="text" placeholder="Username" className="w-full rounded border px-2 py-1" value={loginForm.username} onChange={e => setLoginForm(f => ({ ...f, username: e.target.value }))} required />
                  <input type="password" placeholder="Password" className="w-full rounded border px-2 py-1" value={loginForm.password} onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))} required />
                  <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded flex items-center justify-center gap-2"><FiLogIn /> Login</button>
                  {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
                </form>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="text-green-600 font-semibold">Authenticated as {auth?.username}</div>
                  <button type="button" className="w-full py-2 px-4 bg-gray-600 text-white rounded flex items-center justify-center gap-2" onClick={logout}><FiLogOut /> Logout</button>
                </div>
              )}
            </div>
          )}
        </nav>
        {/* Main settings view with collapsible, nested settings */}
        <div className="flex-1 p-8 overflow-y-auto bg-white rounded-r-2xl shadow-lg relative">
          {/* Sticky top versioning bar appears only when settings are dirty */}
          {dirty && (
            <div className="sticky top-0 z-20 flex items-center gap-2 bg-white/90 border-b border-gray-200 py-2 px-2 rounded-t-2xl shadow-sm">
              <span className="font-semibold text-xs text-gray-500 tracking-wide">Settings v1.0</span>
              <button type="button" className="px-2 py-1 bg-green-500 text-white rounded text-xs" onClick={() => { handleSave(); setDirty(false); }}>Save</button>
              <button type="button" className="px-2 py-1 bg-blue-500 text-white rounded text-xs" onClick={handleExport}>Export</button>
              <input type="file" accept="application/json" onChange={handleImport} className="ml-2 text-xs" />
              <button type="button" className="px-2 py-1 bg-purple-500 text-white rounded text-xs" onClick={() => {/* deploy logic */}}>Deploy</button>
            </div>
          )}
          <motion.form
            className="space-y-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Disclosure defaultOpen>
              {(props: { open: boolean }) => (
                <React.Fragment>
                  <Disclosure.Button className="w-full text-left px-4 py-2 bg-gray-200 rounded font-semibold">
                    LLM Provider Settings
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 pb-2">
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
                    {/* Nested collapsible for provider-specific settings */}
                    {llmProvider === 'Ollama' && (
                      <Disclosure defaultOpen>
                        {(props: { open: boolean }) => (
                          <React.Fragment>
                            <Disclosure.Button className="w-full text-left px-4 py-2 bg-gray-100 rounded font-semibold mt-4">
                              Ollama Settings
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-2 pb-2">
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
                            </Disclosure.Panel>
                          </React.Fragment>
                        )}
                      </Disclosure>
                    )}
                  </Disclosure.Panel>
                </React.Fragment>
              )}
            </Disclosure>
            {/* Add more collapsible/nested settings sections here as needed */}
            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Save Settings
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
