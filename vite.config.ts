import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
    const useLocal = mode === 'dev'

    const alias = useLocal
        ? {
            '@nuitral/core': path.resolve(__dirname, '../core/lib'),
            '@nuitral/icons/dist/nuitral-icons.scss': path.resolve(__dirname, '../icons/dist/nuitral-icons.scss'),
            '@nuitral/theming': path.resolve(__dirname, '../theming/lib/scss/_index.scss'),
            '@nuitral/types': path.resolve(__dirname, '../types'),
        }
        : undefined

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
            exclude: useLocal
                ? [
                    '@nuitral/core',
                    '@nuitral/icons',
                    '@nuitral/theming',
                    '@nuitral/types',
                ]
                : [],
        },
    }
})