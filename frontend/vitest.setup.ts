import { expect } from 'vitest';
// @ts-expect-error
globalThis.expect = expect;
import '@testing-library/jest-dom';
