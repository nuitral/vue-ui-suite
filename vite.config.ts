import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(() => {

    const alias = {
        '@nuitral/core': path.resolve(__dirname, '../core/lib'),
        '@nuitral/theming': path.resolve(__dirname, '../theming/lib/scss/_index.scss'),
        '@nuitral/types': path.resolve(__dirname, '../types/lib'),
    }

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
            }),
        ],
        resolve: {
            alias,
        },
        server: {
            fs: {
                allow: ['..'],
            },
        },

        optimizeDeps: {
            exclude: [
                '@nuitral/core',
                '@nuitral/icons',
                '@nuitral/theming',
                '@nuitral/types',
            ],
        },
    }
})