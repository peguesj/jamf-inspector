import { useState, useCallback } from 'react';
import { JamfAuthOptions, fetchBearerToken, checkBearerToken, invalidateBearerToken } from '../api/jamfAuth';

export function useJamfAuth() {
  const [auth, setAuth] = useState<JamfAuthOptions | null>(null);
  const [status, setStatus] = useState<'idle' | 'valid' | 'invalid' | 'loading' | 'error'>('idle');

  const login = useCallback(async (opts: JamfAuthOptions) => {
    setStatus('loading');
    try {
      await fetchBearerToken(opts);
      setAuth(opts);
      setStatus('valid');
    } catch {
      setStatus('error');
    }
  }, []);

  const check = useCallback(async () => {
    if (!auth) return false;
    setStatus('loading');
    const valid = await checkBearerToken(auth);
    setStatus(valid ? 'valid' : 'invalid');
    return valid;
  }, [auth]);

  const logout = useCallback(async () => {
    if (!auth) return;
    setStatus('loading');
    await invalidateBearerToken(auth);
    setAuth(null);
    setStatus('idle');
  }, [auth]);

  return { auth, status, login, check, logout };
}

export default useJamfAuth;
