import React, { useState } from 'react';
import ModalGuide from '../ModalGuide.tsx';
import SettingsPanel from './SettingsPanel.tsx';

/**
 * SetupWizard - Onboarding/setup wizard for Jamf Inspector
 * Renders a modal with guided steps for connecting to Jamf Pro API and configuring the dashboard.
 * @see https://www.heroui.com/docs/components/modal
 */

export interface SetupWizardProps {
  open: boolean;
  onClose: () => void;
}

const SetupWizard: React.FC<SetupWizardProps> = ({ open, onClose }) => {
  // Optionally, could add more onboarding steps here
  return (
    <ModalGuide open={open} onClose={onClose} title="Onboarding">
      <p>This guided setup will help you connect to your Jamf Pro API and configure your dashboard experience. Follow the steps to get started.</p>
    </ModalGuide>
  );
};

export default SetupWizard;
