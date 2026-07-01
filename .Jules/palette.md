## 2025-05-14 - Semantic Navigation in Vanilla JS Movie Cards
**Learning:** In projects like StreamWeb that use vanilla JS to render list items (movies, trending), using `div` elements with click listeners prevents native keyboard focus and standard browser navigation (e.g., right-click to open in new tab). Switching to semantic `<a>` tags provides these features out-of-the-box.
**Action:** Always prefer `<a>` tags for card-style navigation elements. Ensure the `styles.css` handles these links gracefully with `display: block` and `color: inherit`, and always include `:focus-visible` styles for keyboard users.

### Security Learning: Preventing DOM XSS in User Profiles
- **Issue**: Using `innerHTML` to render user-provided data (like usernames) is a critical security risk (DOM XSS).
- **Pattern**: Always separate static DOM structure from dynamic content. Use `innerHTML` only for trusted static templates, then use `.textContent` to inject user-controlled strings.
- **Hardening**: For purely static content, prefer `document.createElement` and `appendChild` over `innerHTML` to minimize the attack surface and follow defense-in-depth principles.
