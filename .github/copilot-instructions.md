# Copilot instructions

## Project overview

This is a static, browser-only GitHub profile viewer. `index.html` provides the search form and the `.profile-results` mount point, then loads `js/index.js` as a native ES module. The main module handles button/Enter events and the loading/error states, calls `js/githubApi.js` for the GitHub REST API requests, and passes the returned profile and repository data to `js/profileView.js` to render the result.

The API module uses `https://api.github.com` and requests a user's profile and repositories. The README specifies up to 10 repositories and recommends `sort=updated` or `sort=pushed` depending on the intended behavior; the current implementation uses `sort=created`. Check the feature requirements and keep the request behavior and documentation aligned when changing this.

Styles are split by concern: `css/reset.css` for browser defaults, `css/styles.css` for the main layout and shared variables, `css/responsive.css` for breakpoints, and `css/animations.css` for motion and transitions. The HTML and interface text are primarily in Brazilian Portuguese.

## Commands

There is no package manifest, build system, test runner, or linter configured in this repository. Consequently, there are no project-defined build, test, lint, or single-test commands. The application is served as static HTML/CSS/JavaScript and uses browser-native ES modules.

## Codebase conventions

- Keep browser event orchestration in `js/index.js`, HTTP requests and response checks in `js/githubApi.js`, and DOM rendering in `js/profileView.js`.
- Use native ES module imports/exports; avoid introducing a framework or build dependency without a requirement.
- The API functions throw when a response is not successful. The main module owns handling those failures and displaying the loading/error UI; preserve that separation when extending requests.
- `renderProfile(userData, userRepos, container)` owns the profile-results markup and handles an empty repository list. Keep API data mapping in this rendering boundary and use the existing CSS class hooks when changing the markup.
- Shared style values are CSS custom properties declared in `css/styles.css`; keep responsive rules in `css/responsive.css` and animation/transition rules in `css/animations.css`.
