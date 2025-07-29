import React from 'react';
import { Card } from '@heroui/react';

/**
 * SettingsPanel - Dashboard settings panel using HeroUI Card
 * @see https://www.heroui.com/docs/components/card
 */
const SettingsPanel: React.FC = () => (
  <Card title="Settings" className="mb-6">
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Theme</label>
        <select className="mt-1 w-full border rounded p-2">
          <option>System</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Notifications</label>
        <input type="checkbox" className="mr-2" /> Enable email notifications
      </div>
      <button className="px-4 py-2 rounded bg-blue-600 text-white" type="submit">Save</button>
    </form>
  </Card>
);

export default SettingsPanel;
