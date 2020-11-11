import inject from "@rollup/plugin-inject";

export default {
  input: "./src/synargy-components.js",
  output: {
    file: "./dist/synargy-components.js",
    format: "cjs",
  },
  plugins: [
    inject({
      Promise: ["es6-promise", "Promise", "global/window"],
    }),
  ],
};
