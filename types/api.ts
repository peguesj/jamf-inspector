// Version: 0.1
// API Endpoints for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md

export const API_ENDPOINTS = {
  policies: '/JSSResource/policies',
  profiles: '/JSSResource/osxconfigurationprofiles',
  patches: '/JSSResource/patches',
  directoryConnections: '/JSSResource/ldapservers',
  groups: '/JSSResource/computergroups',
  users: '/JSSResource/users',
  devices: '/JSSResource/computers',
  categories: '/JSSResource/categories',
  smartStaticGroups: '/JSSResource/computergroups',
  approvalWorkflow: '/api/v1/approval',
  feedback: '/api/v1/feedback',
};

export default API_ENDPOINTS;
