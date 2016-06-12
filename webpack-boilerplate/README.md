# Webpack boilerplate

Includes `webpack-dev-middleware` and `webpack-hot-middleware`. Feel free to remove if you're not using.

## Setup

1. Specify your main JS file under `entry` in `webpack.config.js`.
2. If your app does not use a custom server, consider using `http-server` instead of `server.js`.
    * In this case, make sure to echo a user-friendly notice on where to find `http-server` after it boots.
3. If using `server.js`, decide if you'd like to use `supervisor`.
    * If so, just make that `npm run server` in `package.json`.
    * If not, remove the script `server-supervisor` and the package `supervisor` from `package.json`.
3. Delete files you aren't using (like `test/`).
