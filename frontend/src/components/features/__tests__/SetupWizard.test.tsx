
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SetupWizard from '../SetupWizard.tsx';

describe('SetupWizard', () => {
  it('renders onboarding steps and handles close', () => {
    const onClose = vi.fn();
    render(<SetupWizard open={true} onClose={onClose} />);
    expect(screen.getByText(/onboarding/i)).toBeInTheDocument();
    // Simulate close button if present
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('does not render when closed', () => {
    render(<SetupWizard open={false} onClose={() => {}} />);
    expect(screen.queryByText(/onboarding/i)).not.toBeInTheDocument();
  });
});
