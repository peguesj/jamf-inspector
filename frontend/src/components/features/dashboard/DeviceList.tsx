import React from 'react';
import type { JamfComputer } from '../../../../../types/models.ts';

/**
 * DeviceList - Lists Jamf devices
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const DeviceList: React.FC<{ devices: JamfComputer[] }> = ({ devices }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Devices</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {devices.length === 0 ? (
        <li className="p-2 text-gray-500">No devices found.</li>
      ) : (
        devices.map((d) => (
          <li key={d.id} className="p-2 flex justify-between">
            <span>{d.name}</span>
            <span className="text-xs text-gray-500">{d.serial_number}</span>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default DeviceList;
