---

description: Comprehensive, authoritative instructions for integrating HeroUI components into the Jamf Inspector AI-assisted dashboard application, with deep links to HeroUI documentation, design guidelines, accessibility, and best practices for a modern, interactive, and accessible user experience.
applyTo: './frontend/src/**'
---

# HeroUI Usage & Design Guide for Jamf Inspector



This guide provides actionable, deeply referenced instructions for integrating [HeroUI](https://www.heroui.com/) components into the Jamf Inspector project, ensuring a modern, accessible, and highly interactive dashboard experience. All usage must comply with project-wide [functional, typed, and documentation standards](./copilot-instructions.md).



# Install it
Execute the following command to install HeroUI CLI:
`npx heroui-cli@latest init`

To install the main HeroUI React package and icons, run:

```bash
npm install @heroui/react @heroui/icons
```


**Important:**
- Always use programmatic imports for HeroUI CSS and JS assets in your React app. For example, add `import '@heroui/react/dist/heroui.min.css'` (and any required JS) to your main entry or layout file (e.g., `src/main.tsx` or `src/App.tsx`).
- **Do NOT use static `<link>` or `<script>` CDN tags** for HeroUI assets in your HTML (such as `index.html`). This will cause 404 errors in Vite, Next.js, Create React App, and other SSR/bundler environments.
- Remove any `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@heroui/core@latest/dist/heroui.min.css">` or `<script src="https://cdn.jsdelivr.net/npm/@heroui/core@latest/dist/heroui.min.js"></script>` tags from your HTML files.
- See [HeroUI Getting Started](https://www.heroui.com/docs/guide/getting-started) and [Theming](https://www.heroui.com/docs/guide/theming) for correct asset inclusion patterns.

**Troubleshooting:**
- If you see 404 errors for `heroui.min.css` or `heroui.min.js` in your browser console, you are likely using static CDN tags. Switch to programmatic imports as described above.



## 1. Overview & Core Principles



- **HeroUI** is a modern, accessible React component library. See [HeroUI Introduction](https://www.heroui.com/docs/guide/introduction).

- All UI must be **stateless, functional, and strictly typed** ([TypeScript Guide](https://www.heroui.com/docs/guide/typescript)).

- **Accessibility** is mandatory: follow [HeroUI Accessibility Guidelines](https://www.heroui.com/docs/guide/accessibility).

- **Design** must be modern, beautiful, and responsive: see [Design System](https://www.heroui.com/docs/guide/design-system).

- **AI Assistant Integration:** The UI must support seamless AI chat and logic execution, with clear affordances and feedback ([Patterns: Chat & Guidance](https://www.heroui.com/docs/components/chat)).

- **Dashboard Patterns:** Use [Layout](https://www.heroui.com/docs/components/layout), [Card](https://www.heroui.com/docs/components/card), [Data Grid](https://www.heroui.com/docs/components/data-grid), and [Navigation](https://www.heroui.com/docs/components/navigation) for interactive dashboards.





## 2. Installation & Setup



- Follow the [Getting Started guide](https://www.heroui.com/docs/guide/getting-started).

- Install peer dependencies as specified in [Installation Requirements](https://www.heroui.com/docs/guide/installation).

- Use [Theming](https://www.heroui.com/docs/guide/theming) for consistent branding and dark/light mode support.



npm install @heroui/core @heroui/icons






## 3. Component Usage Standards



- Reference the [Component Catalog](https://www.heroui.com/docs/components/overview) for available components.

- **Import components** from `@heroui/core` and icons from `@heroui/icons`.

- All components must be used in a **typed, functional** manner ([TypeScript Usage](https://www.heroui.com/docs/guide/typescript)).

- **Document** all usage with JSDoc and reference authoritative resources.

- **Do not mutate state** inside components; use hooks and context as per [State Management](https://www.heroui.com/docs/guide/state-management).





## 4. Design & UX Guidelines



- **Dashboard Layout:** Use [Layout](https://www.heroui.com/docs/components/layout) and [Grid](https://www.heroui.com/docs/components/grid) for responsive, fluid dashboards.

- **Cards & Widgets:** Use [Card](https://www.heroui.com/docs/components/card) for modular, interactive widgets.

- **Navigation:** Implement [Navigation](https://www.heroui.com/docs/components/navigation) for seamless, accessible routing.

- **Data Display:** Use [Data Grid](https://www.heroui.com/docs/components/data-grid) for tabular data, ensuring sorting, filtering, and accessibility.

- **Feedback & Guidance:** Use [Alert](https://www.heroui.com/docs/components/alert), [Tooltip](https://www.heroui.com/docs/components/tooltip), and [Chat](https://www.heroui.com/docs/components/chat) for user guidance and AI assistant integration.

- **Accessibility:** All interactive elements must meet [WCAG 2.1 AA](https://www.heroui.com/docs/guide/accessibility) standards.





## 5. AI Assistant & Interactivity



- Integrate the AI chat assistant using [Chat Component](https://www.heroui.com/docs/components/chat) and ensure it can both respond and execute logic.

- Use [Modal](https://www.heroui.com/docs/components/modal) and [Popover](https://www.heroui.com/docs/components/popover) for guided flows and contextual help.

- Ensure all AI-driven actions provide clear feedback and are accessible.





## 6. Theming & Customization



- Use [ThemeProvider](https://www.heroui.com/docs/guide/theming) to apply global styles and support dark/light modes.

- Customize components via [Tokens](https://www.heroui.com/docs/guide/theming#customization) and [CSS Variables](https://www.heroui.com/docs/guide/theming#css-variables).





## 7. Testing & Quality



- All UI logic must be covered by unit and integration tests ([Testing Guide](https://www.heroui.com/docs/guide/testing)).

- Use [Storybook](https://www.heroui.com/docs/guide/storybook) for component documentation and visual regression testing.

- Enforce linting and formatting with [ESLint](https://www.heroui.com/docs/guide/linting) and [Prettier](https://www.heroui.com/docs/guide/formatting).





## 8. References & Further Reading



- [HeroUI Introduction](https://www.heroui.com/docs/guide/introduction)

- [Component Catalog](https://www.heroui.com/docs/components/overview)

- [Design System](https://www.heroui.com/docs/guide/design-system)

- [Accessibility](https://www.heroui.com/docs/guide/accessibility)

- [Theming](https://www.heroui.com/docs/guide/theming)

- [Testing](https://www.heroui.com/docs/guide/testing)

- [AI Chat Patterns](https://www.heroui.com/docs/components/chat)





## 9. Example: Dashboard Layout with AI Assistant



```tsx

import { Layout, Card, DataGrid, Chat } from '@heroui/core';



/**

 * Jamf Inspector Dashboard

 * @see https://www.heroui.com/docs/components/layout

 */

export const Dashboard = () => (

npm install @heroui/react @heroui/icons

    <Card title="System Overview">
> **Note:**
> - The correct main package is `@heroui/react` (not `@heroui/core`).
> - The correct provider is `HeroUIProvider` from `@heroui/react`.
> - Example import:
>   ```tsx
>   import { HeroUIProvider } from '@heroui/react';
>   // or, if aliased:
>   import { HeroUIProvider as ThemeProvider } from '@heroui/react';
>   ```
> - Always verify the correct export in the HeroUI documentation or package source.
> - See: [HeroUI Theming](https://www.heroui.com/docs/components/theming)

      <DataGrid /* ...typed props... */ />

    </Card>

    <Card title="AI Assistant">

      <Chat /* ...typed props for AI logic... */ />

    </Card>

  </Layout>

);

```


- **Import components** from `@heroui/react` and icons from `@heroui/icons`.


## 10. Changelog & Versioning



- All changes to this guide must be documented in changelog.md using syslog format.

- Reference authoritative resources and update links as HeroUI documentation evolves.



