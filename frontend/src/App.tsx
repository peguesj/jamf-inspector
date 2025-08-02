import React from 'react';
import './main.css';
import Layout from './components/Layout.tsx';
import Dashboard from './components/Dashboard.tsx';
import Devices from './components/Devices.tsx';
import SettingsLayout from './components/SettingsLayout.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';
import SetupWizard from './components/SetupWizard.tsx';
import LogPanel from './components/LogPanel.tsx';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/settings/*" element={<SettingsLayout />} />
      <Route path="/onboarding" element={<SetupWizard />} />
      <Route path="/chat" element={<ChatAssistant />} />
      <Route path="/logs" element={<LogPanel />} />
    </Routes>
  </Layout>
);

export default App;
