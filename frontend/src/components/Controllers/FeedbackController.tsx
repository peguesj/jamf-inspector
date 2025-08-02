import React from 'react';
import type { JamfFeedback } from '../../../../types/models';
import { fetchFeedback } from '../../api/feedback';
/**
 * FeedbackController - Jamf Inspector Feedback CRUD controller
 * @see /docs/PLANNING.md
 * @see react-app.standards.instructions.md
 * @see $DRTW principle
 */
const FeedbackController: React.FC = () => {
  const [feedback, setFeedback] = React.useState<JamfFeedback[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    fetchFeedback()
      .then((data: JamfFeedback[]) => {
        setFeedback(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      {loading && <div>Loading feedback...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">User</th>
              <th className="px-4 py-2 border-b">Message</th>
              <th className="px-4 py-2 border-b">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item.id}>
         <td className="px-4 py-2 border-b">{item.user_id ?? '-'}</td>
         <td className="px-4 py-2 border-b">{item.item ?? '-'}</td>
         <td className="px-4 py-2 border-b">{item.comments ?? '-'}</td>
         <td className="px-4 py-2 border-b">{item.rating ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default FeedbackController;
