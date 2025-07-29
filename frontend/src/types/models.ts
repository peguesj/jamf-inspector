/**
 * Jamf Pro DirectoryBinding
 */
export interface JamfDirectoryBinding {
  id: number;
  name: string;
  type?: string;
  server?: string;
  username?: string;
  password?: string;
}

/**
 * Jamf Pro DiskEncryptionConfiguration
 */
export interface JamfDiskEncryptionConfiguration {
  id: number;
  name: string;
  enabled?: boolean;
  recovery_key_type?: string;
}

/**
 * Jamf Pro DistributionPoint
 */
export interface JamfDistributionPoint {
  id: number;
  name: string;
  ip_address?: string;
  share_name?: string;
}

/**
 * Jamf Pro DockItem
 */
export interface JamfDockItem {
  id: number;
  name: string;
  path?: string;
  type?: string;
}

/**
 * Jamf Pro Ebook
 */
export interface JamfEbook {
  id: number;
  name: string;
  version?: string;
  author?: string;
}

/**
 * Jamf Pro FileUpload
 */
export interface JamfFileUpload {
  id: number;
  name: string;
  file_type?: string;
  size?: number;
}

/**
 * Jamf Pro GsxConnection
 */
export interface JamfGsxConnection {
  id: number;
  name: string;
  enabled?: boolean;
}

/**
 * Jamf Pro HealthcareListener
 */
export interface JamfHealthcareListener {
  id: number;
  name: string;
  status?: string;
}

/**
 * Jamf Pro HealthcareListenerRule
 */
export interface JamfHealthcareListenerRule {
  id: number;
  name: string;
  event_type?: string;
}

/**
 * Jamf Pro LdapServer
 */
export interface JamfLdapServer {
  id: number;
  name: string;
  hostname?: string;
  port?: number;
}

/**
 * Jamf Pro LicensedSoftware
 */
export interface JamfLicensedSoftware {
  id: number;
  name: string;
  version?: string;
  vendor?: string;
}

/**
 * Jamf Pro LogFlush
 */
export interface JamfLogFlush {
  id: number;
  name: string;
  status?: string;
}

/**
 * Jamf Pro MacApplication
 */
export interface JamfMacApplication {
  id: number;
  name: string;
  version?: string;
  bundle_id?: string;
}

/**
 * Jamf Pro ManagedPreferenceProfile
 */
export interface JamfManagedPreferenceProfile {
  id: number;
  name: string;
  domain?: string;
}

/**
 * Jamf Pro MobileDeviceApplication
 */
export interface JamfMobileDeviceApplication {
  id: number;
  name: string;
  version?: string;
  bundle_id?: string;
}

/**
 * Jamf Pro MobileDeviceCommand
 */
export interface JamfMobileDeviceCommand {
  id: number;
  command: string;
  status?: string;
}

/**
 * Jamf Pro MobileDeviceConfigurationProfile
 */
export interface JamfMobileDeviceConfigurationProfile {
  id: number;
  name: string;
  payloads?: any[];
}

/**
 * Jamf Pro MobileDeviceEnrollmentProfile
 */
export interface JamfMobileDeviceEnrollmentProfile {
  id: number;
  name: string;
  type?: string;
}

/**
 * Jamf Pro MobileDeviceExtensionAttribute
 */
export interface JamfMobileDeviceExtensionAttribute {
  id: number;
  name: string;
  data_type?: string;
}

/**
 * Jamf Pro MobileDeviceGroup
 */
export interface JamfMobileDeviceGroup {
  id: number;
  name: string;
  is_smart: boolean;
  members: number[];
}

/**
 * Jamf Pro MobileDeviceHistory
 */
export interface JamfMobileDeviceHistory {
  id: number;
  device_id: number;
  event: string;
  timestamp: string;
}

/**
 * Jamf Pro MobileDeviceInvitation
 */
export interface JamfMobileDeviceInvitation {
  id: number;
  code: string;
  expiration: string;
}

/**
 * Jamf Pro MobileDevice
 */
export interface JamfMobileDevice {
  id: number;
  name: string;
  serial_number?: string;
  asset_tag?: string;
  group_ids?: number[];
  profile_ids?: number[];
}

/**
 * Jamf Pro NetbootServer
 */
export interface JamfNetbootServer {
  id: number;
  name: string;
  ip_address?: string;
}

/**
 * Jamf Pro NetworkSegment
 */
export interface JamfNetworkSegment {
  id: number;
  name: string;
  starting_address?: string;
  ending_address?: string;
}

/**
 * Jamf Pro Package
 */
export interface JamfPackage {
  id: number;
  name: string;
  filename?: string;
  size?: number;
}

/**
 * Jamf Pro PatchAvailableTitle
 */
export interface JamfPatchAvailableTitle {
  id: number;
  name: string;
  version?: string;
}

/**
 * Jamf Pro PatchExternalSource
 */
export interface JamfPatchExternalSource {
  id: number;
  name: string;
  url?: string;
}

/**
 * Jamf Pro PatchInternalSource
 */
export interface JamfPatchInternalSource {
  id: number;
  name: string;
  url?: string;
}

/**
 * Jamf Pro PatchPolicy
 */
export interface JamfPatchPolicy {
  id: number;
  name: string;
  enabled?: boolean;
}

/**
 * Jamf Pro PatchReport
 */
export interface JamfPatchReport {
  id: number;
  name: string;
  status?: string;
}

/**
 * Jamf Pro PatchSoftwareTitle
 */
export interface JamfPatchSoftwareTitle {
  id: number;
  name: string;
  version?: string;
}

/**
 * Jamf Pro Peripheral
 */
export interface JamfPeripheral {
  id: number;
  name: string;
  type?: string;
}

/**
 * Jamf Pro PeripheralType
 */
export interface JamfPeripheralType {
  id: number;
  name: string;
}

/**
 * Jamf Pro Printer
 */
export interface JamfPrinter {
  id: number;
  name: string;
  location?: string;
}

/**
 * Jamf Pro RemovableMacAddress
 */
export interface JamfRemovableMacAddress {
  id: number;
  mac_address: string;
}

/**
 * Jamf Pro RestrictedSoftware
 */
export interface JamfRestrictedSoftware {
  id: number;
  name: string;
  process_name?: string;
}

/**
 * Jamf Pro Script
 */
export interface JamfScript {
  id: number;
  name: string;
  script_contents?: string;
}

/**
 * Jamf Pro Site
 */
export interface JamfSite {
  id: number;
  name: string;
  site_url?: string;
}

/**
 * Jamf Pro SmtpServer
 */
export interface JamfSmtpServer {
  id: number;
  hostname: string;
  port?: number;
}

/**
 * Jamf Pro SoftwareUpdateServer
 */
export interface JamfSoftwareUpdateServer {
  id: number;
  name: string;
  url?: string;
}

/**
 * Jamf Pro UserExtensionAttribute
 */
export interface JamfUserExtensionAttribute {
  id: number;
  name: string;
  data_type?: string;
}

/**
 * Jamf Pro UserGroup
 */
export interface JamfUserGroup {
  id: number;
  name: string;
  is_smart: boolean;
  members: number[];
}

/**
 * Jamf Pro VppAccount
 */
export interface JamfVppAccount {
  id: number;
  name: string;
  account_type?: string;
}

/**
 * Jamf Pro VppAssignment
 */
export interface JamfVppAssignment {
  id: number;
  name: string;
  vpp_account_id?: number;
}

/**
 * Jamf Pro VppInvitation
 */
export interface JamfVppInvitation {
  id: number;
  email: string;
  status?: string;
}

/**
 * Jamf Pro Webhook
 */
export interface JamfWebhook {
  id: number;
  name: string;
  url: string;
}
/**
 * Strictly typed models for Jamf Inspector Dashboard (Jamf Pro Classic API v10.35+)
 * @version 0.3
 * @author Jeremiah Pegues
 * @see ../docs/AUTHORITATIVE.md
 * @see ../.github/instructions/copilot-instructions.md
 * @see jamf-pro-api-collection.json
 */

/**
 * RootState - Redux store root state type
 */
export interface RootState {
  // Add state slices here
}

/**
 * DashboardProps - Props for Dashboard component
 */
export interface DashboardProps {
  // Add dashboard props here
}

/**
 * ChatMessage - Message type for ChatAssistant
 */
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

// Version: 0.2
// Data Models for Jamf Pro ITIL/ITAM Dashboard
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md, https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html


/**
 * Jamf Pro Account
 * @see https://developer.jamf.com/jamf-pro/reference/classic-api
 */
export interface JamfAccount {
  id: number;
  name: string;
  full_name?: string;
  email?: string;
  directory_user?: boolean;
  ldap_server?: string;
  privileges?: string[];
  group_memberships?: number[];
}

/**
 * Jamf Pro Group (static or smart)
 */
export interface JamfGroup {
  id: number;
  name: string;
  is_smart: boolean;
  members: number[];
}

/**
 * Jamf Pro Device (Computer)
 */
export interface JamfComputer {
  id: number;
  name: string;
  serial_number: string;
  asset_tag?: string;
  mac_address?: string;
  last_contact_time?: string;
  group_ids?: number[];
  policy_ids?: number[];
  profile_ids?: number[];
}

/**
 * Jamf Pro User
 */
export interface JamfUser {
  id: number;
  username: string;
  full_name?: string;
  email?: string;
  group_ids?: number[];
  device_ids?: number[];
}

/**
 * Jamf Pro Policy
 */
export interface JamfPolicy {
  id: number;
  name: string;
  enabled: boolean;
  category?: string;
  scope?: string;
  triggers?: string[];
  payloads?: any[];
}

/**
 * Jamf Pro Profile (Configuration Profile)
 */
export interface JamfProfile {
  id: number;
  name: string;
  scope?: string;
  category?: string;
  payloads?: any[];
  conflicts?: string[];
}

/**
 * Jamf Pro Patch
 */
export interface JamfPatch {
  id: number;
  name: string;
  version: string;
  status: string;
  device_ids?: number[];
}

/**
 * Jamf Pro Feedback
 */
export interface JamfFeedback {
  id: number;
  user_id: number;
  item: string;
  comments: string;
  rating: number;
}

/**
 * Jamf Pro Approval
 */
export interface JamfApproval {
  id: number;
  item: string;
  status: 'pending' | 'approved' | 'rejected';
  approvers: string[];
  schedule?: string;
}

/**
 * Jamf Pro Category
 */
export interface JamfCategory {
  id: number;
  name: string;
  description?: string;
}

/**
 * Jamf Pro Department
 */
export interface JamfDepartment {
  id: number;
  name: string;
  building_id?: number;
}

/**
 * Jamf Pro Building
 */
export interface JamfBuilding {
  id: number;
  name: string;
  address?: string;
}

/**
 * SummaryStats - Summary statistics for dashboard
 */
export interface SummaryStats {
  totalPolicies: number;
  totalProfiles: number;
  totalConflicts: number;
}
