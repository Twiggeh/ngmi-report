import { defineConfig } from 'vite';
import { NgmiPolyfill } from 'vite-plugin-ngmi-polyfill';
// import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
	plugins: [NgmiPolyfill()],
});
