import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@services': path.resolve(__dirname,'src/services'),
			'@stores': path.resolve(__dirname,'src/stores'),
			'@api': path.resolve(__dirname,'src/api'),
			'@hooks': path.resolve(__dirname,'src/hooks')
		}
	}
})
