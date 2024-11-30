import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['@unpic/vue', '@cloudinary-util/url-loader'],
  },
})
