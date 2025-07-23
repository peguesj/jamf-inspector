// Version: 0.1
// Authoritative Technology Stack & Coding Standards
// Reference: ../docs/AUTHORITATIVE.md, ../PLANNING.md

export const STACK = {
  frontend: {
    framework: 'React',
    language: 'TypeScript',
    style: 'Functional Components',
    typing: 'Strict',
    uiFramework: 'Tailwind CSS',
    interactivity: 'jQuery',
  },
  stateManagement: 'Redux Toolkit',
  backend: {
    runtime: 'Node.js',
    language: 'TypeScript',
    style: 'Functional Programming',
    apiLayer: 'Express',
  },
  testing: 'Jest',
  linting: 'ESLint',
  formatting: 'Prettier',
  documentation: ['JSDoc', 'Markdown'],
  authoritativeResources: [
    '../docs/AUTHORITATIVE.md',
    '../PLANNING.md',
    '../types/',
    '../docs/'
  ],
  codingTenets: [
    'Strict TypeScript typing everywhere',
    'Functional programming principles',
    'Deterministic logic',
    'No mutation of state',
    'Business logic in pure functions',
    'Stateless UI components',
    'Immutable config in /config and /docs',
    'Typed and validated API calls',
    'Data models in /types',
    'Versioned code and documentation',
  ]
};

export default STACK;
