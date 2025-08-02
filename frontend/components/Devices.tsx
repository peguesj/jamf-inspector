import React from 'react';
import type { Device } from '../types/device';
import { Card } from './Shared/Card';

/**
 * @file Devices.tsx
 * @description Stateless, strictly typed, functional React component for displaying Jamf-managed devices.
 * @author GitHub Copilot
 * @version 0.1.0
 * @see /types/device.ts
 * @see /docs/PLANNING.md
 * @see https://react.dev/
 * @see https://www.heroui.com/docs/components/overview
 * @see https://tailwindcss.com/docs/
 * @see https://jsdoc.app/
 */


/**
 * Props for Devices component.
 */
export interface DevicesProps {
    /** Array of Jamf-managed devices to display */
    devices: readonly Device[];
    /** Optional loading state */
    loading?: boolean;
    /** Optional error message */
    error?: string;
}

/**
 * Stateless, strictly typed, functional component for displaying a list of Jamf-managed devices.
 * - Pure, side-effect free
 * - Accessible (WCAG 2.1 AA)
 * - Uses HeroUI Card for layout
 * @param props DevicesProps
 * @returns JSX.Element
 */
export const Devices: React.FC<DevicesProps> = ({ devices, loading = false, error }) => {
    if (loading) {
        return (
            <div
                role="status"
                aria-live="polite"
                className="flex items-center justify-center h-32"
                data-testid="devices-loading"
            >
                <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-2" />
                <span className="text-blue-700 font-medium">Loading devices...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div
                role="alert"
                aria-live="assertive"
                className="bg-red-100 text-red-700 p-4 rounded"
                data-testid="devices-error"
            >
                {error}
            </div>
        );
    }

    if (!devices.length) {
        return (
            <div
                role="status"
                aria-live="polite"
                className="text-gray-500 p-4"
                data-testid="devices-empty"
            >
                No devices found.
            </div>
        );
    }

    return (
        <section aria-label="Jamf Devices List" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
                <Card
                    key={device.id}
                    title={device.name}
                    subtitle={device.model}
                    className="h-full"
                    aria-label={`Device ${device.name}`}
                >
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                            <strong>Serial:</strong> {device.serialNumber}
                        </li>
                        <li>
                            <strong>User:</strong> {device.user ?? 'Unassigned'}
                        </li>
                        <li>
                            <strong>Status:</strong> {device.status}
                        </li>
                        <li>
                            <strong>Last Check-in:</strong> {device.lastCheckIn
                                ? new Date(device.lastCheckIn).toLocaleString()
                                : 'Never'}
                        </li>
                    </ul>
                </Card>
            ))}
        </section>
    );
};