import React from 'react';
import type { JamfFeedback } from '../../../../../types/models.ts';

/**
 * FeedbackList - Lists user feedback
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const FeedbackList: React.FC<{ feedback: JamfFeedback[] }> = ({ feedback }) => (
  <div className="mb-4">
    <h3 className="font-bold text-lg mb-2">Feedback</h3>
    <ul className="divide-y divide-gray-200 bg-white rounded shadow">
      {feedback.map((f) => (
        <li key={f.id} className="p-2 flex justify-between">
          <span>{f.comments}</span>
          <span className="text-xs text-gray-500">Rating: {f.rating}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default FeedbackList;
