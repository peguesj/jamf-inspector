import React from 'react';
import type { JamfUser } from '../../../../types/models';
import { fetchUsers } from '../../api/users';
/**
 * UsersController - Jamf Inspector Users CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const UsersController: React.FC = () => {
  const [users, setUsers] = React.useState<JamfUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((data: JamfUser[]) => {
        setUsers(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      {loading && <div>Loading users...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Username</th>
              <th className="px-4 py-2 border-b">Full Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Groups</th>
              <th className="px-4 py-2 border-b">Devices</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.full_name ?? '-'}</td>
                <td className="px-4 py-2 border-b">{user.email ?? '-'}</td>
                <td className="px-4 py-2 border-b">{user.group_ids?.join(', ') ?? '-'}</td>
                <td className="px-4 py-2 border-b">{user.device_ids?.join(', ') ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default UsersController;
