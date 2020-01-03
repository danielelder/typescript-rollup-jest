import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

const pkg = require('./package.json');
const version = pkg.version;
const isProduction = process.env.NODE_ENV !== 'development';

export default {
  input: ['src/main.ts'],
  output: {
    file: 'dist/js/main.js',
    format: 'iife',
    sourcemap: true,
    banner: `/*! ${version} */`
  },
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**']
  },
  plugins: [
    replace({
      delimiters: ['{{', '}}'],
      version
    }),
    typescript(),
    isProduction ? uglify({
      compress: {
        pure_funcs: [ 'console.log' ]
      },
      output: {
        comments: (node, comment) => {
          return comment.line === 1
        }
      }
    }) : {}
  ]
};
