import vue from 'unplugin-vue/rollup'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'

export default {
	input: 'lib/index.ts',
	output: [
		{
			file: 'dist/vue-ui-suite.cjs.js',
			format: 'cjs',
			sourcemap: true,
			exports: 'named',
		},
		{
			file: 'dist/vue-ui-suite.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	external: ['vue', '@nuitral/types', '@nuitral/icons'],
	plugins: [
		peerDepsExternal(),
		resolve({
			extensions: ['.mjs', '.js', '.ts', '.vue'],
		}),
		vue(),
		esbuild({
			include: /\.[jt]s?$/,
			exclude: /node_modules/,
			sourceMap: true,
			target: 'es2022',
			loaders: {
				'.vue': 'ts',
			},
		}),
		commonjs(),
		terser(),
	],
}
