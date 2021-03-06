import inject from "@rollup/plugin-inject";

export default [
  {
    input: "./src/synargy-components.js",
    output: {
      file: "./dist/synargy-components.js",
      format: "cjs",
      plugins: [
        inject({
          Promise: ["es6-promise", "Promise", "global/window"],
        }),
      ],
    },
    output: {
      file: "./dist/synargy-components.esm.js",
      format: "es",
    },
    plugins: [
      inject({
        Promise: ["es6-promise", "Promise", "global/window"],
      }),
    ],
  },
];
