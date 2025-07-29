
// Version: 0.2
// API Endpoints for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md, https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html

/**
 * Jamf Pro API endpoints (10.44.1)
 * @see https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
 */


/**
 * Jamf Pro Classic API Endpoints (v10.35+)
 * @see jamf-pro-api-collection.json
 */
export const API_ENDPOINTS = {
  authentication: '/api/v1/auth/token',
  refreshToken: '/api/v1/auth/keep-alive',
  invalidateToken: '/api/v1/auth/invalidate-token',
  tokenDetails: '/api/v1/auth',
  accounts: '/JSSResource/accounts',
  groups: '/JSSResource/computergroups',
  users: '/JSSResource/users',
  computers: '/JSSResource/computers',
  policies: '/JSSResource/policies',
  profiles: '/JSSResource/osxconfigurationprofiles',
  patches: '/JSSResource/patches',
  categories: '/JSSResource/categories',
  departments: '/JSSResource/departments',
  buildings: '/JSSResource/buildings',
  feedback: '/api/v1/feedback',
  approvalWorkflow: '/api/v1/approval',
  // --- Jamf Pro Classic API Resource Endpoints ---
  directoryBindings: '/JSSResource/directorybindings',
  diskEncryptionConfigurations: '/JSSResource/diskencryptionconfigurations',
  distributionPoints: '/JSSResource/distributionpoints',
  dockItems: '/JSSResource/dockitems',
  ebooks: '/JSSResource/ebooks',
  fileUploads: '/JSSResource/fileuploads',
  gsxConnections: '/JSSResource/gsxconnections',
  healthcareListeners: '/JSSResource/healthcarelisteners',
  healthcareListenerRules: '/JSSResource/healthcarelistenerrules',
  ldapServers: '/JSSResource/ldapservers',
  licensedSoftware: '/JSSResource/licensedsoftware',
  logFlush: '/JSSResource/logflush',
  macApplications: '/JSSResource/macapplications',
  managedPreferenceProfiles: '/JSSResource/managedpreferenceprofiles',
  mobileDeviceApplications: '/JSSResource/mobiledeviceapplications',
  mobileDeviceCommands: '/JSSResource/mobiledevicecommands',
  mobileDeviceConfigurationProfiles: '/JSSResource/mobiledeviceconfigurationprofiles',
  mobileDeviceEnrollmentProfiles: '/JSSResource/mobiledeviceenrollmentprofiles',
  mobileDeviceExtensionAttributes: '/JSSResource/mobiledeviceextensionattributes',
  mobileDeviceGroups: '/JSSResource/mobiledevicegroups',
  mobileDeviceHistory: '/JSSResource/mobiledevicehistory',
  mobileDeviceInvitations: '/JSSResource/mobiledeviceinvitations',
  mobileDevices: '/JSSResource/mobiledevices',
  netbootServers: '/JSSResource/netbootservers',
  networkSegments: '/JSSResource/networksegments',
  packages: '/JSSResource/packages',
  patchAvailableTitles: '/JSSResource/patchavailabletitles',
  patchExternalSources: '/JSSResource/patchexternalsources',
  patchInternalSources: '/JSSResource/patchinternalsources',
  patchPolicies: '/JSSResource/patchpolicies',
  patchReports: '/JSSResource/patchreports',
  patchSoftwareTitles: '/JSSResource/patchsoftwaretitles',
  peripherals: '/JSSResource/peripherals',
  peripheralTypes: '/JSSResource/peripheraltypes',
  printers: '/JSSResource/printers',
  removableMacAddresses: '/JSSResource/removablemacaddresses',
  restrictedSoftware: '/JSSResource/restrictedsoftware',
  scripts: '/JSSResource/scripts',
  sites: '/JSSResource/sites',
  smtpServers: '/JSSResource/smtpservers',
  softwareUpdateServers: '/JSSResource/softwareupdateservers',
  userExtensionAttributes: '/JSSResource/userextensionattributes',
  userGroups: '/JSSResource/usergroups',
  vppAccounts: '/JSSResource/vppaccounts',
  vppAssignments: '/JSSResource/vppassignments',
  vppInvitations: '/JSSResource/vppinvitations',
  webhooks: '/JSSResource/webhooks',
};

export default API_ENDPOINTS;
