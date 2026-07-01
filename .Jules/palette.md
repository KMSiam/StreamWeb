## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

## 2025-05-14 - DOM Performance Optimization with DocumentFragment
**Learning:** Appending elements to the live DOM inside a loop (as seen in `renderTrending` and `renderMovies`) causes multiple reflows and repaints, which can degrade performance, especially with larger datasets. Using `document.createDocumentFragment()` allows for batching these updates into a single DOM insertion, significantly improving rendering efficiency.
**Action:** Always use `DocumentFragment` when creating and appending multiple elements in a loop to the DOM.

## 2025-05-14 - XSS Prevention in Profile Display
**Learning:** Using `innerHTML` with user-provided data (like `username`) creates a Cross-Site Scripting (XSS) vulnerability. Even if the data is expected to be safe, it's a best practice to treat all user input as untrusted. Replacing template literal injection with `textContent` ensures that any HTML tags in the input are rendered as plain text rather than executed by the browser.
**Action:** Never inject user-controlled data directly into `innerHTML`. Use `textContent` or `innerText` for setting text values, or use `DOMParser` / a sanitization library if HTML rendering is strictly required.
