import React from 'react';
import type { JamfApproval } from '../../../../types/models';
import { fetchApprovals } from '../../api/approvals';
/**
 * ApprovalsController - Jamf Inspector Approvals CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const ApprovalsController: React.FC = () => {
  const [approvals, setApprovals] = React.useState<JamfApproval[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchApprovals()
      .then((data: JamfApproval[]) => {
        setApprovals(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Approvals</h2>
      {loading && <div>Loading approvals...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Type</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((approval) => (
              <tr key={approval.id}>
         <td className="px-4 py-2 border-b">{approval.item}</td>
         <td className="px-4 py-2 border-b">{approval.approvers.length > 0 ? approval.approvers.join(', ') : '-'}</td>
                <td className="px-4 py-2 border-b">{approval.status ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default ApprovalsController;
