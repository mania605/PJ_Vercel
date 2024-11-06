import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: { sourcemap: true },
	server: { sourcemap: true },
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern', // 최신 API로 전환
			},
		},
	},
});