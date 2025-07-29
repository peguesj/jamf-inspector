/**
 * DeviceList - Dashboard device list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
import type { JamfComputer } from '../../../../types/models.ts';

interface Props {
  devices: JamfComputer[];
};

const DeviceList: React.FC<Props> = ({ devices }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Devices</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(devices, null, 2)}
    </pre>
  </div>
);

export default DeviceList;
