## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - Testing Vanilla JS with Vitest and JSDOM
**Learning:** Testing legacy-style vanilla JS applications that rely on global variables (like `supabaseClient`) and `DOMContentLoaded` events can be achieved using Vitest with the `jsdom` environment. By manually triggering `DOMContentLoaded` and ensuring form elements are accessible as properties on the form object (e.g., `form.email`), we can reliably simulate user interactions and verify error handling logic.
**Action:** Use `eval()` or script injection to load the JS file under test in a JSDOM context, and mock all external dependencies on the `window` object.
