# CommonJS + Legacy Websites

The way of writing CommonJS modules presented here was meant to make it easier
for a legacy application to start having modularised javascript in its codebase.

In a nutshell, these modules would either use the CommonJS way of handling
dependencies and exposing their public API, or they would expose themselves
through the window object, and would also expect their dependencies to be added
to it.

This method was developed having certain restrictions in mind, in a specific
project.

## Usage

Look at either the `index.html` file, or run `node index.js`.

## Docs

Look at `js/entry.js` for explanation.
