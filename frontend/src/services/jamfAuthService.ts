import { JamfAuthOptions, fetchBearerToken, checkBearerToken, invalidateBearerToken } from '../api/jamfAuth';

export const jamfAuthService = {
  async login(opts: JamfAuthOptions) {
    return fetchBearerToken(opts);
  },
  async check(opts: JamfAuthOptions) {
    return checkBearerToken(opts);
  },
  async logout(opts: JamfAuthOptions) {
    return invalidateBearerToken(opts);
  }
};

export default jamfAuthService;
