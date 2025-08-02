import type { JamfComputer } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';

/**
 * Fetch all Jamf Pro devices via backend proxy
 * @returns {Promise<JamfComputer[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchDevices(auth: JamfAuthOptions): Promise<JamfComputer[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/computers',
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
  if (!res.ok) throw new Error('Failed to fetch devices');
  const data: JamfProxyResponse = await res.json();
  return data.data?.computers || [];
}
