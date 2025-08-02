import React from 'react';
import './main.css';
import Layout from './components/Layout.tsx';
import Dashboard from './components/Dashboard.tsx';
import DevicesController from './components/Controllers/DevicesController.tsx';
import PoliciesController from './components/Controllers/PoliciesController.tsx';
import ProfilesController from './components/Controllers/ProfilesController.tsx';
import UsersController from './components/Controllers/UsersController.tsx';
import GroupsController from './components/Controllers/GroupsController.tsx';
import ApprovalsController from './components/Controllers/ApprovalsController.tsx';
import FeedbackController from './components/Controllers/FeedbackController.tsx';
import SettingsLayout from './components/SettingsLayout.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';
import SetupWizard from './components/SetupWizard.tsx';
import LogPanel from './components/LogPanel.tsx';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/devices/*" element={<DevicesController />} />
      <Route path="/policies/*" element={<PoliciesController />} />
      <Route path="/profiles/*" element={<ProfilesController />} />
      <Route path="/users/*" element={<UsersController />} />
      <Route path="/groups/*" element={<GroupsController />} />
      <Route path="/approvals/*" element={<ApprovalsController />} />
      <Route path="/feedback/*" element={<FeedbackController />} />
      <Route path="/settings/*" element={<SettingsLayout />} />
      <Route path="/onboarding" element={<SetupWizard />} />
      <Route path="/chat" element={<ChatAssistant />} />
      <Route path="/logs" element={<LogPanel />} />
    </Routes>
  </Layout>
);

export default App;
