import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      '/api': 'http://localhost:8090',
=======
      '/api': 'http://3.145.188.163:8090',
>>>>>>> 7d12550f6774cb2251ad3ef0a8daca5faaf4f277
},
},

})
