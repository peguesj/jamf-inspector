
import React, { useState } from 'react';
import ModalGuide from './ModalGuide.tsx';
import SettingsPanel from './SettingsPanel.tsx';

/**
 * SetupWizard - Onboarding/setup wizard for Jamf Inspector
 * Renders a modal with guided steps for connecting to Jamf Pro API and configuring the dashboard.
 * @see https://www.heroui.com/docs/components/modal
 */
const SetupWizard: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <aside className="w-full md:w-80">
      <button className="mb-4 px-4 py-2 rounded bg-blue-600 text-white w-full" onClick={() => setShowGuide(true)}>
        Show Guided Setup
      </button>
      <button className="mb-4 px-4 py-2 rounded bg-gray-700 text-white w-full" onClick={() => setShowSettings(true)}>
        Open Settings
      </button>
      <ModalGuide open={showGuide} onClose={() => setShowGuide(false)} title="Welcome to Jamf Inspector!">
        <p>This guided setup will help you connect to your Jamf Pro API and configure your dashboard experience. Follow the steps to get started.</p>
      </ModalGuide>
      <ModalGuide open={showSettings} onClose={() => setShowSettings(false)} title="Settings">
        <SettingsPanel />
      </ModalGuide>
    </aside>
  );
};

export default SetupWizard;
