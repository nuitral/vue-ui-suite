import vue from 'unplugin-vue/rollup'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import license from 'rollup-plugin-license'

const licenseBanner = `/**
 * @license
 * nuitral UI Suite
 * Copyright 2026 Nicola Centonze
 * SPDX-License-Identifier: MIT
 *
 * Permission is hereby granted under the MIT License.
 * See LICENSE file for full text.
 */`

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
        license({
            banner: licenseBanner,
            sourcemap: true,
        }),
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
            legalComments: 'inline',
            loaders: {
                '.vue': 'ts',
            },
        }),
        commonjs(),
        terser({
            format: {
                comments: /@license/i,
            },
        }),
    ],
}
