import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'DENEME APP',
    charset: 'utf-8',
    lang: 'en',
    meta: [
      { name: 'theme-color', content: '#314D47' },
      { name: "description", content: "Put your description here."},
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/png', href: '/pwa/logo_x32.png' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/pwa/l192x192.png' },
      { rel: 'manifest', href: '/pwa/manifest.json' }
    ]
  }
})
