import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/core/index.ts',
      name: 'HTMLExtensionKit',
      fileName: (format) => {
        switch (format) {
          case 'umd':
            return 'html-extensions-kit.min.js';
          case 'es':
            return 'html-extensions-kit.js';
          default:
            return `html-extensions-kit.${format}.js`;
        }
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'html-extensions-kit.[ext]',
        globals: {}
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser'
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      include: ['src']
    })
  ]
});
