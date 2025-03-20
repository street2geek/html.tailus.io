import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx()],
    site: 'https://html.tailus.io',
    prefetch: {
        prefetchAll: true,
    },
    vite: {
        resolve: {
            preserveSymlinks: true,
        },

        plugins: [tailwindcss()],
    },
})
