import React from 'react';
import type { JamfProfile } from '../../../../types/models';
import { fetchProfiles } from '../../api/profiles';
/**
 * ProfilesController - Jamf Inspector Profiles CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const ProfilesController: React.FC = () => {
  const [profiles, setProfiles] = React.useState<JamfProfile[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchProfiles()
      .then((data: JamfProfile[]) => {
        setProfiles(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profiles</h2>
      {loading && <div>Loading profiles...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Scope</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Conflicts</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="px-4 py-2 border-b">{profile.name}</td>
                <td className="px-4 py-2 border-b">{profile.scope ?? '-'}</td>
                <td className="px-4 py-2 border-b">{profile.category ?? '-'}</td>
                <td className="px-4 py-2 border-b">{profile.conflicts?.join(', ') ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ProfilesController;
