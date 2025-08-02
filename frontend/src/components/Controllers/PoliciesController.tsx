import React from 'react';
import type { JamfPolicy } from '../../../../types/models';
import { fetchPolicies } from '../../api/policies';
/**
 * PoliciesController - Jamf Inspector Policies CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const PoliciesController: React.FC = () => {
  const [policies, setPolicies] = React.useState<JamfPolicy[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchPolicies()
      .then((data: JamfPolicy[]) => {
        setPolicies(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Policies</h2>
      {loading && <div>Loading policies...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Enabled</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Scope</th>
              <th className="px-4 py-2 border-b">Triggers</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id}>
                <td className="px-4 py-2 border-b">{policy.name}</td>
                <td className="px-4 py-2 border-b">{policy.enabled ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2 border-b">{policy.category ?? '-'}</td>
                <td className="px-4 py-2 border-b">{policy.scope ?? '-'}</td>
                <td className="px-4 py-2 border-b">{policy.triggers?.join(', ') ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default PoliciesController;
