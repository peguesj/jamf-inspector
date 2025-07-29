import React from 'react';
import AppFrame from './AppFrame';

/**
 * Layout - Page layout wrapper for Jamf Inspector
 * Wraps content in AppFrame shell.
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppFrame>{children}</AppFrame>
);

export default Layout;
