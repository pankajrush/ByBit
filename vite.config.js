import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
})

// export default {
//   base: '/myapp/',  // Adjust this to the subdirectory where the app is hosted
// }