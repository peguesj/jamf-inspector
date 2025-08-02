import React from 'react';
import type { JamfComputer } from '../../../../types/models';
import { fetchDevices } from '../../api/devices';
/**
 * DevicesController - Jamf Inspector Devices CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const DevicesController: React.FC = () => {
  const [devices, setDevices] = React.useState<JamfComputer[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchDevices()
      .then((data: JamfComputer[]) => {
        setDevices(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Devices</h2>
      {loading && <div>Loading devices...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Serial Number</th>
              <th className="px-4 py-2 border-b">Asset Tag</th>
              <th className="px-4 py-2 border-b">MAC Address</th>
              <th className="px-4 py-2 border-b">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id}>
                <td className="px-4 py-2 border-b">{device.name}</td>
                <td className="px-4 py-2 border-b">{device.serial_number}</td>
                <td className="px-4 py-2 border-b">{device.asset_tag ?? '-'}</td>
                <td className="px-4 py-2 border-b">{device.mac_address ?? '-'}</td>
                <td className="px-4 py-2 border-b">{device.last_contact_time ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default DevicesController;
