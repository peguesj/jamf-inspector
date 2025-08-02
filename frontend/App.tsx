
/**
 * App - Jamf Pro ITIL/ITAM Dashboard Frontend Entry
 * @version 0.2
 * @author Jeremiah Pegues
 * @description Strictly typed, stateless, functional React app entry point.
 * @see ../docs/AUTHORITATIVE.md
 * @see ../.github/instructions/copilot-instructions.md
 */



import React from 'react';
import Layout from './components/Layout.js';
import Dashboard from './src/components/features/Dashboard.tsx';
import SetupWizard from './components/SetupWizard.js';
import ModalGuide from './components/ModalGuide.js';
import SettingsPanel from './components/SettingsPanel.js';

const App: React.FC = () => (
  <Layout>
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <Dashboard />
      </div>
      <aside className="w-full md:w-80">
        <SetupWizard />
      </aside>
    </div>
  </Layout>
);

export default App;
