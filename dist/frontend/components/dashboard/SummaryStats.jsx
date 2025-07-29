/**
 * SummaryStats - Dashboard summary statistics component
 * @version 0.2
 * @author GitHub Copilot
 * @see ../../../docs/AUTHORITATIVE.md
 */
import React from 'react';
const SummaryStats = ({ stats, analyticsData, telemetryData }) => (<div className="bg-blue-50 p-4 rounded">
    <h2 className="text-lg font-semibold mb-2">Summary Statistics</h2>
    <ul className="text-sm">
      <li>Total Policies: {stats.totalPolicies}</li>
      <li>Total Profiles: {stats.totalProfiles}</li>
      <li>Total Conflicts: {stats.totalConflicts}</li>
      <li>Analytics Data: {analyticsData ? JSON.stringify(analyticsData) : 'Loading...'}</li>
      <li>Telemetry Data: {telemetryData ? JSON.stringify(telemetryData) : 'Loading...'}</li>
    </ul>
  </div>);
export default SummaryStats;
