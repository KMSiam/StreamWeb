## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - Batching DOM Updates with DocumentFragment
**Learning:** Appending elements to the DOM inside a loop (like in 'renderMovies' or 'renderContinueWatching') causes multiple reflows and repaints. Using a 'DocumentFragment' allows batching all elements and performing a single append operation, significantly improving performance for lists.
**Action:** Always use 'DocumentFragment' when rendering multiple elements dynamically in vanilla JS.
