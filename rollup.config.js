import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

const EMPTY_MODULE_ID = '$empty$'
const EMPTY_MODULE = `export default {}`

const BROWSERIFY_ALIASES = {
  module: EMPTY_MODULE_ID,
  'fetch-blob/from': EMPTY_MODULE_ID,
};

const nodeResolve = resolve({
  browser: true
});

const browserify = {
  name: 'browserify',
  resolveId(source) {
    if (source in BROWSERIFY_ALIASES) {
      if (BROWSERIFY_ALIASES[source] === EMPTY_MODULE_ID) {
        return EMPTY_MODULE_ID;
      }
      return nodeResolve.resolveId(BROWSERIFY_ALIASES[source], undefined);
    }
    if (source === EMPTY_MODULE_ID) {
      return EMPTY_MODULE_ID;
    }
  },
  load(id) {
    if (id === EMPTY_MODULE_ID) return EMPTY_MODULE;
  },
};

export default [
  {
    input: "src/index.ts",
    inlineDynamicImports: true,
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      commonjs(),
      browserify,
      nodeResolve,
      typescript({ tsconfig: "./tsconfig.json" })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{  file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
