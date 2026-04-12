import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import checker from 'vite-plugin-checker'

export default defineConfig(() => {
    return {
        root: path.resolve(__dirname, 'demo'),
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        isCustomElement: tag =>
                            tag.startsWith('nuitral-'),
                    },
                },
            }), checker({
                vueTsc: {
                    root: '..',
                    tsconfigPath: 'tsconfig.demo.json',
                },
            }),
        ],

        server: {
            fs: {
                allow: ['..'],
            },
        },
    }
})