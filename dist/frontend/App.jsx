/**
 * App - Jamf Pro ITIL/ITAM Dashboard Frontend Entry
 * @version 0.2
 * @author Jeremiah Pegues
 * @description Strictly typed, stateless, functional React app entry point.
 * @see ../docs/AUTHORITATIVE.md
 * @see ../.github/instructions/copilot-instructions.md
 */
import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Provider } from 'react-redux';
import store from './store.js';
import Dashboard from './components/Dashboard.js';
const steps = [
    'Welcome',
    'API Credentials',
    'Test Connection',
    'Finish',
];
const SetupWizard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [step, setStep] = useState(0);
    const [apiUrl, setApiUrl] = useState('');
    const [apiUser, setApiUser] = useState('');
    const [apiPass, setApiPass] = useState('');
    const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prev = () => setStep((s) => Math.max(s - 1, 0));
    const close = () => setIsOpen(false);
    return (<Dialog open={isOpen} onClose={close} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        <DialogPanel className="w-full max-w-md space-y-6 bg-white p-8 rounded shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-2">Jamf Inspector Setup Wizard</DialogTitle>
          {/* Timeline Progress */}
          <div className="flex items-center justify-center mb-4">
            {steps.map((label, idx) => (<div key={label} className="flex items-center">
                <div className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${idx <= step ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-white'}`}>{idx < step ? <CheckCircleIcon className="w-6 h-6 text-blue-600"/> : idx + 1}</div>
                {idx < steps.length - 1 && <div className={`w-8 h-1 ${idx < step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>}
              </div>))}
          </div>
          {/* Step Content */}
          {step === 0 && (<div className="text-center">
              <p>Welcome to Jamf Inspector! This wizard will help you connect to your Jamf Pro API server.</p>
            </div>)}
          {step === 1 && (<form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Jamf Pro API URL</label>
                <input type="url" className="mt-1 w-full border rounded p-2" value={apiUrl} onChange={e => setApiUrl(e.target.value)} placeholder="https://jamf.example.com" required/>
              </div>
              <div>
                <label className="block text-sm font-medium">API Username</label>
                <input type="text" className="mt-1 w-full border rounded p-2" value={apiUser} onChange={e => setApiUser(e.target.value)} required/>
              </div>
              <div>
                <label className="block text-sm font-medium">API Password</label>
                <input type="password" className="mt-1 w-full border rounded p-2" value={apiPass} onChange={e => setApiPass(e.target.value)} required/>
              </div>
            </form>)}
          {step === 2 && (<div className="text-center">
              <p>Testing connection to <span className="font-mono text-blue-600">{apiUrl || '...'}</span>...</p>
              {/* TODO: Add async test logic */}
            </div>)}
          {step === 3 && (<div className="text-center">
              <p className="text-green-600 font-semibold">Setup complete! You can now use the dashboard.</p>
            </div>)}
          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 rounded bg-gray-200" onClick={prev} disabled={step === 0}>Back</button>
            {step < steps.length - 1 ? (<button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={next}>
                Next
              </button>) : (<button className="px-4 py-2 rounded bg-green-600 text-white" onClick={close}>Finish</button>)}
          </div>
        </DialogPanel>
      </div>
    </Dialog>);
};
const App = () => (<Provider store={store}>
    <SetupWizard />
    <Dashboard />
  </Provider>);
export default App;
