/**
 * Jamf API Authentication Utility
 * Supports Basic Authentication (default) and other types.
 * @see https://developer.jamf.com/jamf-pro/reference/classic-api
 * @see /docs/AUTHORITATIVE.md
 */

export type JamfAuthType = 'Basic' | 'Bearer' | 'OAuth';

export interface JamfAuthOptions {
  type: JamfAuthType;
  username?: string;
  password?: string;
  token?: string;
  baseURL?: string;
}

/**
 * Get Authorization header for Jamf API
 * @param opts JamfAuthOptions
 * @returns {string} Authorization header value
 */
export function getJamfAuthHeader(opts: JamfAuthOptions): string {
  if (opts.type === 'Basic' && opts.username && opts.password) {
    const b64 = btoa(`${opts.username}:${opts.password}`);
    return `Basic ${b64}`;
  }
  if (opts.type === 'Bearer' && opts.token) {
    return `Bearer ${opts.token}`;
  }
  if (opts.type === 'OAuth' && opts.token) {
    return `OAuth ${opts.token}`;
  }
  throw new Error('Invalid JamfAuthOptions');
}

/**
 * Jamf Pro Bearer token management (frontend service)
 */
export async function fetchBearerToken(opts: JamfAuthOptions): Promise<string> {
  const res = await fetch('/api/auth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ baseURL: opts.baseURL, username: opts.username, password: opts.password })
  });
  if (!res.ok) throw new Error('Failed to get token');
  const data = await res.json();
  // Token is managed server-side, but you may want to return success
  return data.success ? 'ok' : 'error';
}

export async function checkBearerToken(opts: JamfAuthOptions): Promise<boolean> {
  const params = new URLSearchParams({ baseURL: opts.baseURL || '', username: opts.username || '', password: opts.password || '' });
  const res = await fetch(`/api/auth/check?${params.toString()}`);
  if (!res.ok) return false;
  const data = await res.json();
  return !!data.success;
}

export async function invalidateBearerToken(opts: JamfAuthOptions): Promise<boolean> {
  const res = await fetch('/api/auth/invalidate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ baseURL: opts.baseURL, username: opts.username, password: opts.password })
  });
  if (!res.ok) return false;
  const data = await res.json();
  return !!data.success;
}
