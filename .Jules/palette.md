## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - Testing Vanilla JS Auth with JSDOM and Vitest
**Learning:** For projects without a build system or package.json, adding Vitest and JSDOM allows for effective unit testing of DOM-dependent logic. When mocking 'window' and 'global' in a Node environment, ensure properties like 'location' and 'Event' are correctly handled, and that 'url' is provided to JSDOM to avoid URL parsing errors.
**Action:** Use vi.waitFor() to handle async event listeners that perform operations like Supabase auth calls. Always mock global alert and console.error to verify error handling paths.
