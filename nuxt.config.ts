// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module',
    'nuxt-icon'

  ],
  srcDir: 'src/',
  alias: {
    assets: resolve(__dirname, 'src/assets'),
  }
})
