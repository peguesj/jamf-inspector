
import React, { useState } from 'react';
import ModalGuide from '../ModalGuide.tsx';
import SettingsPanel from './SettingsPanel.tsx';

/**
 * SetupWizard - Multi-step onboarding/setup wizard for Jamf Inspector
 * Renders a modal with guided steps, progress dots, and completion logic.
 * @see https://www.heroui.com/docs/components/modal
 */
export interface SetupWizardProps {
  open: boolean;
  onClose: () => void;
}

const steps = [
  {
    title: 'Welcome',
    content: <p>Welcome to Jamf Inspector! This guided setup will help you connect to your Jamf Pro API and configure your dashboard experience.</p>,
  },
  {
    title: 'Connect to Jamf Pro',
    content: <SettingsPanel />,
  },
  {
    title: 'Finish',
    content: <p>Setup complete! You can now use the dashboard. Access settings at any time from the menu.</p>,
  },
];

const SetupWizard: React.FC<SetupWizardProps> = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const isLast = step === steps.length - 1;
  const isFirst = step === 0;

  return (
    <ModalGuide open={open} onClose={onClose} title={steps[step].title}>
      <div className="mb-6">{steps[step].content}</div>
      <div className="flex justify-center mb-4">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`mx-1 w-2 h-2 rounded-full ${i === step ? 'bg-blue-600' : 'bg-blue-200'}`}
            aria-label={`Step ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 rounded bg-gray-200 text-gray-700"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
        >
          Back
        </button>
        {isLast ? (
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white"
            onClick={onClose}
          >
            Finish
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white"
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          >
            Next
          </button>
        )}
      </div>
    </ModalGuide>
  );
};

export default SetupWizard;
