import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(() => {

    const alias = {
        '@nuitral/core': path.resolve(__dirname, '../core/lib'),
        '@nuitral/icons/dist/nuitral-icons.scss': path.resolve(__dirname, '../icons/dist/nuitral-icons.scss'),
        '@nuitral/theming': path.resolve(__dirname, '../theming'),
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