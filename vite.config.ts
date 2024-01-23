import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'rich-snippet-js',
            fileName: 'rich-snippet-js',
        },
    },
    plugins: [dts()],
});