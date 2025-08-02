import type { JamfGroup } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';
/**
 * Fetch all Jamf Pro groups via backend proxy
 * @returns {Promise<JamfGroup[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchGroups(auth: JamfAuthOptions): Promise<JamfGroup[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/computergroups',
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
  if (!res.ok) throw new Error('Failed to fetch groups');
  const data: JamfProxyResponse = await res.json();
  return data.data?.computergroups || [];
}
