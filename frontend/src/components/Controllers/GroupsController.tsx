import React from 'react';
import type { JamfGroup } from '../../../../types/models';
import { fetchGroups } from '../../api/groups';
/**
 * GroupsController - Jamf Inspector Groups CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const GroupsController: React.FC = () => {
  const [groups, setGroups] = React.useState<JamfGroup[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchGroups()
      .then((data: JamfGroup[]) => {
        setGroups(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Groups</h2>
      {loading && <div>Loading groups...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Type</th>
              <th className="px-4 py-2 border-b">Members</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.id}>
                <td className="px-4 py-2 border-b">{group.name}</td>
         <td className="px-4 py-2 border-b">{group.is_smart ? 'Smart' : 'Static'}</td>
         <td className="px-4 py-2 border-b">{group.members.length > 0 ? group.members.join(', ') : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default GroupsController;
