## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-15 - Production Code Health: Removing Debug Logs
**Learning:** Leftover console.log statements from development can clutter production logs and potentially expose sensitive session information. Regularly cleaning up these logs during refactoring improves maintainability and security.
**Action:** Remove non-essential console.log statements, especially those logging full state objects like auth sessions.
