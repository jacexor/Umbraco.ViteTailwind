import { defineConfig } from 'vite'
import path from 'path'

import tailwindcss from '@tailwindcss/vite'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({

    plugins: [

        tailwindcss(),

        FullReload(
            [
                path.resolve(__dirname, '../Views/**/*.cshtml'),
                path.resolve(__dirname, '../Views/Partials/**/*.cshtml'),
                path.resolve(__dirname, '../App_Plugins/**/*')
            ],
            {
                always: true
            }
        )
    ],

    server: {

        host: 'localhost',

        port: 5173,

        strictPort: true,

        watch: {
            usePolling: true,
            interval: 100
        },

        fs: {
            allow: ['..']
        }
    },

    resolve: {

        alias: {

            '@': path.resolve(__dirname, './scripts'),

            '@styles': path.resolve(__dirname, './styles')
        }
    },

    build: {

        manifest: true,

        outDir: '../wwwroot/dist',

        emptyOutDir: true,

        rollupOptions: {

            input: {
                app: path.resolve(__dirname, './scripts/app.ts')
            },

            output: {

                entryFileNames: 'js/[name].js',

                chunkFileNames: 'js/[name].js',

                assetFileNames: (assetInfo) => {

                    const extension = assetInfo.names?.[0]
                        ?.split('.')
                        .pop()

                    if (extension === 'css') {
                        return 'css/[name].css'
                    }

                    return 'assets/[name].[ext]'
                }
            }
        }
    }
})