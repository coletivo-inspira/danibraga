import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';

/**
 * Plugin simples para copiar pastas estáticas para o dist.
 * Necessário porque i18n/ e assets/images/ precisam existir
 * no build final para funcionar em produção (GitHub Pages).
 */
function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const dirs = [
        { src: 'i18n', dest: 'dist/i18n' },
        { src: 'assets/images', dest: 'dist/assets/images' },
        { src: 'assets/audio', dest: 'dist/assets/audio' },
        { src: 'assets/fonts', dest: 'dist/assets/fonts' },
      ];

      function copyDir(src: string, dest: string) {
        try {
          mkdirSync(dest, { recursive: true });
          const entries = readdirSync(src);
          for (const entry of entries) {
            const srcPath = resolve(src, entry);
            const destPath = resolve(dest, entry);
            if (statSync(srcPath).isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          }
        } catch (e) {
          // Silently skip if source directory doesn't exist
        }
      }

      for (const dir of dirs) {
        copyDir(dir.src, dir.dest);
      }

      console.log('[copy-static-assets] Copied i18n/, assets/images/, assets/audio/, assets/fonts/ to dist/');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [copyStaticAssets()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        projetoDetalhe: resolve(__dirname, 'projeto-detalhe.html'),
        contato: resolve(__dirname, 'contato.html'),
      }
    }
  }
});
