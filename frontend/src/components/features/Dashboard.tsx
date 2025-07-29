import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SummaryStatsComponent from './dashboard/SummaryStatsComponent.tsx';
import PolicyList from './dashboard/PolicyList.tsx';
import ProfileList from './dashboard/ProfileList.tsx';
import PatchList from './dashboard/PatchList.tsx';
import GroupList from './dashboard/GroupList.tsx';
import UserList from './dashboard/UserList.tsx';
import DeviceList from './dashboard/DeviceList.tsx';
import ApprovalList from './dashboard/ApprovalList.tsx';
import FeedbackList from './dashboard/FeedbackList.tsx';
import type {
  SummaryStats,
  JamfPolicy,
  JamfProfile,
  JamfPatch,
  JamfGroup,
  JamfUser,
  JamfComputer,
  JamfApproval,
  JamfFeedback
} from '../../../../types/models.ts';

/**
 * Dashboard - Strictly typed, stateless, functional component
 * @version 0.2
 * @author Jeremiah Pegues
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../.github/instructions/copilot-instructions.md
 */

// Placeholder fetch function for Jamf Pro dashboard data
async function fetchDashboardData(): Promise<{
  summaryStats: SummaryStats;
  policies: JamfPolicy[];
  profiles: JamfProfile[];
  patches: JamfPatch[];
  groups: JamfGroup[];
  users: JamfUser[];
  devices: JamfComputer[];
  approvals: JamfApproval[];
  feedback: JamfFeedback[];
}> {
  // TODO: Replace with real API call
  return {
    summaryStats: { totalPolicies: 45, totalProfiles: 30, totalConflicts: 5 },
    policies: [
      { id: 1, name: 'Password Policy', enabled: true, category: 'Security', scope: 'All', triggers: ['login'], payloads: [] },
      { id: 2, name: 'Encryption Policy', enabled: true, category: 'Security', scope: 'All', triggers: ['startup'], payloads: [] }
    ],
    profiles: [
      { id: 1, name: 'WiFi Profile', scope: 'All', category: 'Network', payloads: [], conflicts: [] },
      { id: 2, name: 'VPN Profile', scope: 'All', category: 'Network', payloads: [], conflicts: [] }
    ],
    patches: [
      { id: 1, name: 'macOS 14.5', version: '14.5', status: 'pending', device_ids: [1, 2] },
      { id: 2, name: 'Jamf Agent 10.40', version: '10.40', status: 'installed', device_ids: [1] }
    ],
    groups: [
      { id: 1, name: 'Admins', is_smart: false, members: [1] },
      { id: 2, name: 'All Devices', is_smart: true, members: [1, 2] }
    ],
    users: [
      { id: 1, username: 'jane', group_ids: [1], device_ids: [1] },
      { id: 2, username: 'john', group_ids: [2], device_ids: [2] }
    ],
    devices: [
      { id: 1, name: 'MacBook Pro', serial_number: 'ABC123', group_ids: [1], policy_ids: [1], profile_ids: [1] },
      { id: 2, name: 'iMac', serial_number: 'XYZ789', group_ids: [2], policy_ids: [2], profile_ids: [2] }
    ],
    approvals: [
      { id: 1, item: 'New Device', status: 'pending', approvers: ['admin'], schedule: '2025-07-25' }
    ],
    feedback: [
      { id: 1, user_id: 2, item: 'Dashboard', comments: 'Great dashboard!', rating: 5 }
    ]
  };
}


const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <div className="p-8">Loading dashboard data...</div>;
  if (error || !data) return <div className="p-8 text-red-600">Error loading dashboard data.</div>;

  return (
    <div className="dashboard" style={{ padding: '2rem' }}>
      <h2 className="text-2xl font-bold mb-4" role="heading" aria-level={2}>Summary Statistics</h2>
      <SummaryStatsComponent stats={data.summaryStats} />
      <h2 className="text-2xl font-bold mb-4" role="heading" aria-level={2}>Policies (Filtered & Draggable)</h2>
      <PolicyList policies={data.policies} />
      <ProfileList profiles={data.profiles} />
      <PatchList patches={data.patches} />
      <GroupList groups={data.groups} />
      <UserList users={data.users} />
      <DeviceList devices={data.devices} />
      <ApprovalList approvals={data.approvals} />
      <FeedbackList feedback={data.feedback} />
    </div>
  );
};

export default Dashboard;
