import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
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
