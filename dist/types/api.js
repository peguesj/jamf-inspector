// Version: 0.2
// API Endpoints for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md, https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
/**
 * Jamf Pro API endpoints (10.44.1)
 * @see https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
 */
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
