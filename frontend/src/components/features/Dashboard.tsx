import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SummaryStatsComponent from './dashboard/SummaryStatsComponent.tsx';
import PolicyList from './dashboard/PolicyList.tsx';
import type {
  JamfPolicy,
  JamfProfile,
  JamfPatch,
  JamfGroup,
  JamfUser,
  JamfComputer,
  JamfApproval,
  JamfFeedback
} from '../../../../types/models.ts';
import { fetchPolicies } from '../../api/policies';
import ProfileList from './dashboard/ProfileList.tsx';
import { fetchProfiles } from '../../api/profiles';
import PatchList from './dashboard/PatchList.tsx';
import { fetchPatches } from '../../api/patches';
import GroupList from './dashboard/GroupList.tsx';
import { fetchGroups } from '../../api/groups';
import UserList from './dashboard/UserList.tsx';
import { fetchUsers } from '../../api/users';
import DeviceList from './dashboard/DeviceList.tsx';
import { fetchDevices } from '../../api/devices';
import ApprovalList from './dashboard/ApprovalList.tsx';
import { fetchApprovals } from '../../api/approvals';
import FeedbackList from './dashboard/FeedbackList.tsx';
import { fetchFeedback } from '../../api/feedback';


/**
 * Dashboard - Strictly typed, stateless, functional component
 * @version 0.3
 * @author Jeremiah Pegues
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../.github/instructions/copilot-instructions.md
 */


const Dashboard: React.FC = () => {
  const { data: policies, isLoading: loadingPolicies, error: errorPolicies } = useQuery<JamfPolicy[]>({
    queryKey: ['policies'],
    queryFn: fetchPolicies,
    staleTime: 5 * 60 * 1000,
  });
  const { data: profiles, isLoading: loadingProfiles, error: errorProfiles } = useQuery<JamfProfile[]>({
    queryKey: ['profiles'],
    queryFn: fetchProfiles,
    staleTime: 5 * 60 * 1000,
  });
  const { data: patches, isLoading: loadingPatches, error: errorPatches } = useQuery<JamfPatch[]>({
    queryKey: ['patches'],
    queryFn: fetchPatches,
    staleTime: 5 * 60 * 1000,
  });
  const { data: groups, isLoading: loadingGroups, error: errorGroups } = useQuery<JamfGroup[]>({
    queryKey: ['groups'],
    queryFn: fetchGroups,
    staleTime: 5 * 60 * 1000,
  });
  const { data: users, isLoading: loadingUsers, error: errorUsers } = useQuery<JamfUser[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
  });
  const { data: devices, isLoading: loadingDevices, error: errorDevices } = useQuery<JamfComputer[]>({
    queryKey: ['devices'],
    queryFn: fetchDevices,
    staleTime: 5 * 60 * 1000,
  });
  const { data: approvals, isLoading: loadingApprovals, error: errorApprovals } = useQuery<JamfApproval[]>({
    queryKey: ['approvals'],
    queryFn: fetchApprovals,
    staleTime: 5 * 60 * 1000,
  });
  const { data: feedback, isLoading: loadingFeedback, error: errorFeedback } = useQuery<JamfFeedback[]>({
    queryKey: ['feedback'],
    queryFn: fetchFeedback,
    staleTime: 5 * 60 * 1000,
  });

  if (
    loadingPolicies || loadingProfiles || loadingPatches ||
    loadingGroups || loadingUsers || loadingDevices ||
    loadingApprovals || loadingFeedback
  ) return <div className="p-8">Loading dashboard data...</div>;
  if (errorPolicies || !policies) return <div className="p-8 text-red-600">Error loading policies.</div>;
  if (errorProfiles || !profiles) return <div className="p-8 text-red-600">Error loading profiles.</div>;
  if (errorPatches || !patches) return <div className="p-8 text-red-600">Error loading patches.</div>;
  if (errorGroups || !groups) return <div className="p-8 text-red-600">Error loading groups.</div>;
  if (errorUsers || !users) return <div className="p-8 text-red-600">Error loading users.</div>;
  if (errorDevices || !devices) return <div className="p-8 text-red-600">Error loading devices.</div>;
  if (errorApprovals || !approvals) return <div className="p-8 text-red-600">Error loading approvals.</div>;
  if (errorFeedback || !feedback) return <div className="p-8 text-red-600">Error loading feedback.</div>;

  return (
    <div
      className="dashboard p-8 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-lg border border-gray-200"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 60%, rgba(200,220,255,0.7) 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        border: '1px solid rgba(180,200,255,0.18)',
      }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Policies</h2>
      <PolicyList policies={policies} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Profiles</h2>
      <ProfileList profiles={profiles} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Patches</h2>
      <PatchList patches={patches} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Groups</h2>
      <GroupList groups={groups} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Users</h2>
      <UserList users={users} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Devices</h2>
      <DeviceList devices={devices} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Approvals</h2>
      <ApprovalList approvals={approvals} />
      <h2 className="text-3xl font-extrabold mb-6 text-blue-900 drop-shadow-lg" role="heading" aria-level={2}>Feedback</h2>
      <FeedbackList feedback={feedback} />
      {/* NotificationToaster and templating engine integration points go here */}
    </div>
  );
};

export default Dashboard;
