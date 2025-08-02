import React from 'react';
import { Card } from '@heroui/react';
import { FaServer, FaRobot, FaBell } from 'react-icons/fa';
import JamfServerSettings from './JamfServerSettings';
import LLMProviderSettings from './LLMProviderSettings';
import NotificationSettings from './NotificationSettings';

/**
 * SettingsLayout - Main settings panel for Jamf Inspector
 * - Right column panel, async loading/saving/testing
 * - Modular sections for Jamf Pro server, LLM providers, notifications
 * @see https://www.heroui.com/docs/components/card
 * @see https://react-icons.github.io/react-icons/
 */
const SettingsLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6 w-full max-w-xl ml-auto">
      <Card>
        <div className="flex items-center gap-2 text-lg font-semibold mb-2"><FaServer /> Jamf Pro Server</div>
        <JamfServerSettings />
      </Card>
      <Card>
        <div className="flex items-center gap-2 text-lg font-semibold mb-2"><FaRobot /> LLM Providers</div>
        <LLMProviderSettings />
      </Card>
      <Card>
        <div className="flex items-center gap-2 text-lg font-semibold mb-2"><FaBell /> Notifications</div>
        <NotificationSettings />
      </Card>
    </div>
  );
};

export default SettingsLayout;
