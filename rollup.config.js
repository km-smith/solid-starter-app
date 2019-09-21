import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
    dir: 'dist/',
		format: 'esm',
	},
	plugins: [
		resolve(),
    babel(),
    postcss({ inject: false }),
		production && terser()
	]
}