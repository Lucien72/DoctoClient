import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        theme_color: "#7ed321",
        background_color: "#7ed321",
        display: "fullscreen",
        scope: "/",
        start_url: "/https://aesthetic-syrniki-30ca7c.netlify.app",
        name: "To Do List",
        short_name: "TDL",
        description: "DOCTOCLIENT en PWA",
        icons: [
          {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
      } 
    })
  ],
})
