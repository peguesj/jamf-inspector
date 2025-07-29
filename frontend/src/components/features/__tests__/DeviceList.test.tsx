import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeviceList from '../dashboard/DeviceList.tsx';

describe('DeviceList', () => {
    it('renders device names and serials', () => {
        const devices = [
            { id: 1, name: 'MacBook Pro', serial_number: 'C02XXX', model: 'MacBookPro16,1' },
            { id: 2, name: 'iMac', serial_number: 'C03YYY', model: 'iMac20,1' },
        ];
        render(<DeviceList devices={devices} />);
        expect(screen.getByText('MacBook Pro')).toBeInTheDocument();
        expect(screen.getByText('iMac')).toBeInTheDocument();
        expect(screen.getByText('C02XXX')).toBeInTheDocument();
        expect(screen.getByText('C03YYY')).toBeInTheDocument();
    });

    it('shows empty state if no devices', () => {
        render(<DeviceList devices={[]} />);
        expect(screen.getByText(/no devices/i)).toBeInTheDocument();
    });
});
