import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingsPanel from '../SettingsPanel.tsx';
// import { HeroUIProvider } from '@heroui/react';

describe('SettingsPanel', () => {
  it('renders settings form fields', () => {
    render(
    //   <HeroUIProvider>
        <SettingsPanel />
      //</HeroUIProvider> *
    );
    expect(screen.getByLabelText(/api url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/api key/i)).toBeInTheDocument();
  });
});
