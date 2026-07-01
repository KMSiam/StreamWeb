## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - DOM Performance Optimization with DocumentFragment
**Learning:** Appending elements to the live DOM inside a loop (as seen in `renderTrending` and `renderMovies`) causes multiple reflows and repaints, which can degrade performance, especially with larger datasets. Using `document.createDocumentFragment()` allows for batching these updates into a single DOM insertion, significantly improving rendering efficiency.
**Action:** Always use `DocumentFragment` when creating and appending multiple elements in a loop to the DOM.

### Security Learning: Hardcoded Secrets
Hardcoding API keys in configuration files (like `supabase-config.js`) exposes sensitive credentials in the version control system. For client-side applications, while "anon" keys are intended to be public, they should still be managed via environment-specific configuration files (e.g., `config.js`) that are excluded from git. This allows different environments (dev, staging, prod) to have their own keys and prevents accidental leakage of service-level credentials.
