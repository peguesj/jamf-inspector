import type { JamfApproval } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';
/**
 * Fetch all Jamf Pro approvals via backend proxy
 * @returns {Promise<JamfApproval[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchApprovals(auth: JamfAuthOptions): Promise<JamfApproval[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/api/v1/approval',
    method: 'GET',
    headers: {},
    username: auth.username!,
    password: auth.password!,
  };
  const res = await fetch('/api/proxy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to fetch approvals');
  const data: JamfProxyResponse = await res.json();
  return data.data?.approvals || [];
}
