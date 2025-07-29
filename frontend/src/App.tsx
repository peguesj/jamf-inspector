import React from 'react';
import Dashboard from '../components/Dashboard.js';
import ChatAssistant from '../components/ChatAssistant.js';
import AppFrame from '../components/AppFrame.js';
import SetupWizard from '../components/SetupWizard.js';

const App: React.FC = () => {
  return (
    <AppFrame
      header={
        <>
          <h1 className="text-2xl font-bold">Jamf Inspector Dashboard</h1>
          <span className="text-xs text-gray-500">v0.3 &mdash; Strictly Typed, Functional, Demo Data</span>
        </>
      }
      left={<Dashboard />}
      right={
        <>
          <SetupWizard />
          <ChatAssistant />
        </>
      }
      footer={<>&copy; 2025 Jamf Inspector &mdash; See <a href="/docs/AUTHORITATIVE.md" className="underline">Authoritative Docs</a></>}
    />
  );
};

export default App;
