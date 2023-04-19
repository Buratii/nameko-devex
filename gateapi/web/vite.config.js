import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test.spec}.ts'],
		setupFiles: ['./setupTest.js'],
	},
	server: {
		port: 3000,
		proxy: {
			'/orders': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
				secure: false,
			}
		}
	},
}

export default config
