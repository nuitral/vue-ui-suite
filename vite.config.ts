import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ command }) => {
	const isDev = command === 'serve';

	return {
		root: isDev ? path.resolve(__dirname, 'demo') : process.cwd(),
		build: {
			lib: {
				entry: path.resolve(__dirname, 'lib/index.ts'),
				name: 'vue-ui-suite',
				fileName: (format) => `vue-ui-suite.${format}.js`,
			},
			rollupOptions: {
				external: ['vue'],
				output: [
					{
						format: 'es',
						entryFileNames: 'vue-ui-suite.esm.js',
						dir: 'dist',
					},
					{
						format: 'cjs',
						entryFileNames: 'vue-ui-suite.cjs.js',
						dir: 'dist',
					},
				],
			},
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
		plugins: [
			vue(),
			dts({
				rollupTypes: true,
				tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
			}),
		],
	};
});
