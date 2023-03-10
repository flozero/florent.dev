export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      "Google+Sans": true
    }
  },
  css: [
    '~/assets/css/global.css',
    '~/assets/css/theme.css',
    '~/node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/fgiraud'
    }
  },
  content: {
    highlight: {
      theme: 'github-dark'
    },
    documentDriven: true
  },
   nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  build: {
    transpile: ['lite-youtube'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
})

