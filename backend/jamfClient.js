"use strict";
/**
 * @file Jamf Pro API Client
 * @version 0.1
 * @author Jeremiah Pegues
 * @description Typed, functional Jamf API client for backend integration.
 * @see ../docs/AUTHORITATIVE.md
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJamfClient = createJamfClient;
const axios_1 = __importDefault(require("axios"));
/**
 * Creates a typed, functional Jamf API client.
 * @param {JamfClientConfig} config - Jamf API client configuration
 * @returns {ReturnType<typeof axios.create>} Configured Axios instance
 */
function createJamfClient(config) {
    return axios_1.default.create({
        baseURL: config.baseURL,
        auth: {
            username: config.auth.username,
            password: config.auth.password,
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}
exports.default = createJamfClient;
