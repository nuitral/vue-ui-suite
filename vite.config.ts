import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
	const isDev = command === 'serve'

	return {
		root: isDev ? path.resolve(__dirname, 'demo') : process.cwd(),
		plugins: [
			vue({
				template: {
					compilerOptions: {
						isCustomElement: tag => tag.startsWith('nuitral-'),
					},
				},
			}),
		],
	}
})
