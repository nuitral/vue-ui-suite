import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
    tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/no-use-v-if-with-v-for': 'off',
            'vue/require-valid-default-prop': 'off',
            'vue/no-deprecated-slot-attribute': 'off',
            semi: ['error', 'never'],
            'no-extra-semi': 'error',
            '@stylistic/semi': 'off',
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 4,
                    multiline: 1,
                },
            ],
            'vue/html-indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
        },
    },
    {
        files: ['**/*.vue'],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
        },
    },
])
