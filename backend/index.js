"use strict";
/**
 * @file Jamf Pro ITIL/ITAM Dashboard Backend Entry
 * @version 0.1
 * @author Jeremiah Pegues
 * @company Pegues OPSCORP
 * @license Exclusive non-perpetual license to VERSUS VERSUS VERSUS LLC dba 3VS Vantage, transferrable to authorized clients
 * @email jeremiah@pegues.io
 * @description
 *   - Implements the backend entry point for the Jamf Pro ITIL/ITAM Dashboard.
 *   - Strictly adheres to functional programming principles and TypeScript typing.
 *   - All business logic is implemented in pure, stateless functions.
 *   - All configuration and standards are referenced from authoritative resources.
 *   - Stack: Node.js, TypeScript, Express, Functional Programming.
 *   - Documentation: JSDoc standard, granular and verbose.
 *   - References:
 *     - ../docs/AUTHORITATIVE.md (stack, coding standards)
 *     - ../PLANNING.md (requirements, architecture)
 *     - https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-10.44.0/page/Jamf_Pro_Documentation.html
 *     - https://www.axelos.com/best-practice-solutions/itil
 *     - https://www.itassetmanagement.net/itam-standards/
 *     - https://developer.apple.com/documentation/devicemanagement/configuration_profiles
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../types/api"));
const jamfClient_1 = __importDefault(require("./jamfClient"));
const node_cache_1 = __importDefault(require("node-cache"));
/**
 * @constant cache - In-memory cache for periodic queries (chat assistant, analytics)
 */
const cache = new node_cache_1.default({ stdTTL: 300, checkperiod: 60 });
/**
 * Jamf API client configuration (immutable, authoritative)
 * @constant
 */
const jamfConfig = {
    baseURL: 'https://mdm.19parkinc.com:8443',
    auth: {
        username: 'jeremiah',
        password: 'J3r3miah$9000!',
    },
};
/**
 * Typed, functional Jamf API client instance
 * @constant
 */
const jamfClient = (0, jamfClient_1.default)(jamfConfig);
/**
 * Express application instance for the Jamf Inspector backend.
 * @constant
 */
const app = (0, express_1.default)();
/**
 * Middleware: Parses incoming JSON requests.
 */
app.use(express_1.default.json());
/**
 * GET /JSSResource/policies
 * Returns a list of policies from Jamf Pro.
 * @returns {Policy[]} Array of Policy objects (typed)
 * @see Policy (../types/models)
 * @see API_ENDPOINTS.policies (../types/api)
 */
app.get(api_1.default.policies, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Caching for chat assistant/analytics
        const cached = cache.get('policies');
        if (cached) {
            res.json(cached);
            // TypeScript: explicit void return after response (see https://www.typescriptlang.org/docs/handbook/functions.html#void)
            return;
        }
        const response = yield jamfClient.get(api_1.default.policies);
        const data = response.data;
        const policies = data.policies || [];
        cache.set('policies', policies);
        // Audit log
        console.log(`[AUDIT] Fetched policies at ${new Date().toISOString()}`);
        res.json(policies);
    }
    catch (error) {
        // Error handling, rate limit, pagination
        console.error(`[ERROR] Failed to fetch policies:`, error);
        res.status(500).json({ error: 'Failed to fetch policies', details: error });
    }
}));
/**
 * GET /JSSResource/osxconfigurationprofiles
 * Returns a list of configuration profiles from Jamf Pro.
 * @returns {Profile[]} Array of Profile objects (typed)
 * @see Profile (../types/models)
 * @see API_ENDPOINTS.profiles (../types/api)
 */
app.get(api_1.default.profiles, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('profiles');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.profiles);
        const data = response.data;
        const profiles = data.osxconfigurationprofiles || [];
        cache.set('profiles', profiles);
        console.log(`[AUDIT] Fetched profiles at ${new Date().toISOString()}`);
        res.json(profiles);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch profiles:`, error);
        res.status(500).json({ error: 'Failed to fetch profiles', details: error });
    }
}));
/**
 * GET /JSSResource/patches
 * Returns a list of patch management objects from Jamf Pro.
 * @returns {Patch[]} Array of Patch objects (typed)
 */
app.get(api_1.default.patches, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('patches');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.patches);
        const data = response.data;
        const patches = data.patches || [];
        cache.set('patches', patches);
        console.log(`[AUDIT] Fetched patches at ${new Date().toISOString()}`);
        res.json(patches);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch patches:`, error);
        res.status(500).json({ error: 'Failed to fetch patches', details: error });
    }
}));
/**
 * GET /JSSResource/ldapservers
 * Returns a list of directory connections from Jamf Pro.
 * @returns {any[]} Array of directory connection objects
 */
app.get(api_1.default.directoryConnections, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield jamfClient.get(api_1.default.directoryConnections);
        const data = response.data;
        const ldapservers = data.ldapservers || [];
        res.json(ldapservers);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch directory connections', details: error });
    }
}));
/**
 * GET /JSSResource/computergroups
 * Returns a list of computer groups from Jamf Pro.
 * @returns {Group[]} Array of Group objects (typed)
 */
app.get(api_1.default.groups, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('groups');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.groups);
        const data = response.data;
        const groups = data.computergroups || [];
        cache.set('groups', groups);
        console.log(`[AUDIT] Fetched groups at ${new Date().toISOString()}`);
        res.json(groups);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch groups:`, error);
        res.status(500).json({ error: 'Failed to fetch groups', details: error });
    }
}));
/**
 * GET /JSSResource/users
 * Returns a list of users from Jamf Pro.
 * @returns {User[]} Array of User objects (typed)
 */
app.get(api_1.default.users, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('users');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.users);
        const data = response.data;
        const users = data.users || [];
        cache.set('users', users);
        console.log(`[AUDIT] Fetched users at ${new Date().toISOString()}`);
        res.json(users);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch users:`, error);
        res.status(500).json({ error: 'Failed to fetch users', details: error });
    }
}));
/**
 * GET /JSSResource/computers
 * Returns a list of devices from Jamf Pro.
 * @returns {Device[]} Array of Device objects (typed)
 */
app.get(api_1.default.devices, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('devices');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.devices);
        const data = response.data;
        const devices = data.computers || [];
        cache.set('devices', devices);
        console.log(`[AUDIT] Fetched devices at ${new Date().toISOString()}`);
        res.json(devices);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch devices:`, error);
        res.status(500).json({ error: 'Failed to fetch devices', details: error });
    }
}));
/**
 * GET /JSSResource/categories
 * Returns a list of categories from Jamf Pro.
 * @returns {any[]} Array of category objects
 */
app.get(api_1.default.categories, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield jamfClient.get(api_1.default.categories);
        const data = response.data;
        const categories = data.categories || [];
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories', details: error });
    }
}));
/**
 * GET /JSSResource/computergroups (Smart/Static Groups)
 * Returns a list of smart/static groups from Jamf Pro.
 * @returns {Group[]} Array of Group objects (typed)
 */
app.get(api_1.default.smartStaticGroups, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield jamfClient.get(api_1.default.smartStaticGroups);
        const data = response.data;
        const groups = data.computergroups || [];
        res.json(groups);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch smart/static groups', details: error });
    }
}));
/**
 * GET /api/v1/approval
 * Returns approval workflow objects from Jamf Pro.
 * @returns {Approval[]} Array of Approval objects (typed)
 */
app.get(api_1.default.approvalWorkflow, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('approvals');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.approvalWorkflow);
        const data = response.data;
        const approvals = data.approvals || [];
        cache.set('approvals', approvals);
        console.log(`[AUDIT] Fetched approvals at ${new Date().toISOString()}`);
        res.json(approvals);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch approval workflow:`, error);
        res.status(500).json({ error: 'Failed to fetch approval workflow', details: error });
    }
}));
/**
 * GET /api/v1/feedback
 * Returns feedback objects from Jamf Pro.
 * @returns {Feedback[]} Array of Feedback objects (typed)
 */
app.get(api_1.default.feedback, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cached = cache.get('feedback');
        if (cached) {
            res.json(cached);
            return;
        }
        const response = yield jamfClient.get(api_1.default.feedback);
        const data = response.data;
        const feedback = data.feedback || [];
        cache.set('feedback', feedback);
        console.log(`[AUDIT] Fetched feedback at ${new Date().toISOString()}`);
        res.json(feedback);
    }
    catch (error) {
        console.error(`[ERROR] Failed to fetch feedback:`, error);
        res.status(500).json({ error: 'Failed to fetch feedback', details: error });
    }
}));
/**
 * GET /health
 * Health check endpoint for service monitoring.
 * @returns {Object} Status object
 */
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
/**
 * Application entry point: Starts the Express server.
 * @constant
 * @type {number|string}
 */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    /**
     * Startup log with version and port info.
     * @event Startup
     */
    console.log(`Jamf Inspector Backend v0.1 running on port ${PORT}`);
});
exports.default = app;
