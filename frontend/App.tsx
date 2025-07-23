// Version: 0.1
// Jamf Pro ITIL/ITAM Dashboard Frontend Entry
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md
// Stack: React, TypeScript, Functional Components, Tailwind CSS, Redux Toolkit

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';

const App: React.FC = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
