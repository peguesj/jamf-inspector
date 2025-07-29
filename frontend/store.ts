
/**
 * Redux Store for Jamf Pro ITIL/ITAM Dashboard
 * @version 0.2
 * @author Jeremiah Pegues
 * @description Strictly typed Redux store configuration.
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../.github/instructions/copilot-instructions.md
 */
import { configureStore } from '@reduxjs/toolkit';
import type { RootState } from '../types/models.js';


// --- Jamf Pro Resource Slices (scaffolded, strictly typed) ---
// TODO: Implement reducers and thunks for each resource
// import { mobileDeviceReducer } from './slices/mobileDeviceSlice';
// import { peripheralReducer } from './slices/peripheralSlice';
// import { directoryBindingReducer } from './slices/directoryBindingSlice';
// ...add more as needed

const store = configureStore({
  reducer: {
    // mobileDevices: mobileDeviceReducer,
    // peripherals: peripheralReducer,
    // directoryBindings: directoryBindingReducer,
    // ...add more as implemented
  },
});

export default store;
