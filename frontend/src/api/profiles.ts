import type { JamfProfile } from '../../../types/models';
import { JamfProxyRequest, JamfProxyResponse } from '../../../types/api';
import { JamfAuthOptions } from './jamfAuth';

/**
 * Fetch all Jamf Pro configuration profiles via backend proxy
 * @returns {Promise<JamfProfile[]>}
 * @see /docs/AUTHORITATIVE.md
 */
export async function fetchProfiles(auth: JamfAuthOptions): Promise<JamfProfile[]> {
  const payload: JamfProxyRequest = {
    baseURL: auth.baseURL!,
    path: '/JSSResource/osxconfigurationprofiles',
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
  if (!res.ok) throw new Error('Failed to fetch profiles');
  const data: JamfProxyResponse = await res.json();
  return data.data?.osxconfigurationprofiles || [];
}
