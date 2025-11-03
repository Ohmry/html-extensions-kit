import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
// import { generateIndex } from './site/lib/index-generator';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
      }
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'html-extensions-kit.min.[ext]',
        globals: {}
      }
    },
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
    // {
    //   name: 'generate-index',
    //   apply: 'build',
    //   closeBundle: generateIndex
    // }
  ]
});
