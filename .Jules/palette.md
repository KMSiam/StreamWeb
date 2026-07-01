## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - DOM Performance Optimization with DocumentFragment
**Learning:** Appending elements to the live DOM inside a loop (as seen in `renderTrending` and `renderMovies`) causes multiple reflows and repaints, which can degrade performance, especially with larger datasets. Using `document.createDocumentFragment()` allows for batching these updates into a single DOM insertion, significantly improving rendering efficiency.
**Action:** Always use `DocumentFragment` when creating and appending multiple elements in a loop to the DOM.
## 2026-07-01 - Optimizing DOM Queries in Auth State Transitions
**Learning:** Performing DOM queries like `querySelector` inside a `forEach` loop over a large set of elements is inefficient. By using more specific CSS selectors (`document.querySelectorAll('.sidebar-auth .user-profile-summary')`), we can target exactly the elements that need to be updated and avoid unnecessary iterations and sub-tree searches.
**Action:** Use specific CSS selectors to target relevant elements directly instead of iterating and querying within the loop.
