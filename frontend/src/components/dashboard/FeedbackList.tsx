/**
 * FeedbackList - Dashboard feedback list component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
import type { JamfFeedback } from '../../../types/models.js';

interface Props {
  feedback: JamfFeedback[];
};

const FeedbackList: React.FC<Props> = ({ feedback }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Feedback</h2>
    <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
      {JSON.stringify(feedback, null, 2)}
    </pre>
  </div>
);

export default FeedbackList;
