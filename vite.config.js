import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * Base attribute to deploy Electron application
   */
  /*base: path.resolve(__dirname,'./dist'),*/
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
