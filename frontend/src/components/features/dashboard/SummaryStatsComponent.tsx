import React from 'react';
import type { SummaryStats } from '../../../../../types/models.ts';

/**
 * SummaryStatsComponent - Displays summary statistics for the dashboard
 * @see ../../../../docs/AUTHORITATIVE.md
 */
const SummaryStatsComponent: React.FC<{ stats: SummaryStats }> = ({ stats }) => (
  <div className="mb-4 p-4 bg-white rounded shadow flex gap-8">
    <div>
      <div className="text-lg font-bold">Policies</div>
      <div className="text-2xl">{stats.totalPolicies}</div>
    </div>
    <div>
      <div className="text-lg font-bold">Profiles</div>
      <div className="text-2xl">{stats.totalProfiles}</div>
    </div>
    <div>
      <div className="text-lg font-bold text-red-600">Conflicts</div>
      <div className="text-2xl text-red-600">{stats.totalConflicts}</div>
    </div>
  </div>
);

export default SummaryStatsComponent;
