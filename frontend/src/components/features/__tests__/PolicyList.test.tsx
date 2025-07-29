import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PolicyList from '../dashboard/PolicyList.tsx';

describe('PolicyList', () => {
  it('renders without crashing and displays policies', () => {
    const mockPolicies = [
      { id: 1, name: 'CIS-L2-PasswordPolicy-Global-v1.0', enabled: true, category: 'Password' },
      { id: 2, name: 'CIS-L2-EncryptionPolicy-Global-v1.0', enabled: false, category: 'Encryption' },
    ];
    render(<PolicyList policies={mockPolicies} />);
    expect(screen.getByText('CIS-L2-PasswordPolicy-Global-v1.0')).toBeInTheDocument();
    expect(screen.getByText('CIS-L2-EncryptionPolicy-Global-v1.0')).toBeInTheDocument();
  });

  it('shows empty state if no policies', () => {
    render(<PolicyList policies={[]} />);
    expect(screen.getByText(/no policies/i)).toBeInTheDocument();
  });
});
