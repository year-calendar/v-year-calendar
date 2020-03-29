import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';
import { uglify } from "rollup-plugin-uglify";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";

var defaultConfig = {
  input: './src/v-year-calendar.vue',
  plugins: [
    vue({
      css: true
    }),
    postcss(),
    nodeResolve({
      jsnext: true,
      extensions: [".js", ".vue"]
    }),
    babel({
      exclude: "node_modules/**",
      extensions: ['.js', '.vue'],
    }),
    commonjs()
  ],
  external: Object.keys(pkg.peerDependencies)
};

export default [
  // CJS
  {
    ...defaultConfig,
    output: {
      file: "./dist/v-year-calendar.js",
      format: "cjs"
    },
  },
  {
    input: './dist/v-year-calendar.js',
    output: {
      file: './dist/v-year-calendar.min.js',
      format: "cjs"
    },
    plugins: [uglify()]
  },

  // UMD
  {
    ...defaultConfig,
    output: {
      file: "./dist/v-year-calendar.umd.js",
      format: "umd",
      name: "Calendar",
      globals: {
        vue: "Vue"
      }
    },
  },
  {
    input: './dist/v-year-calendar.umd.js',
    output: {
      file: './dist/v-year-calendar.umd.min.js',
      format: "umd"
    },
    plugins: [uglify()]
  }
];