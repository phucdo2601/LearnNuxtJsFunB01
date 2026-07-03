// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    {
      path: "~/app/components",
      pathPrefix: false,
    }
  ],

  runtimeConfig: {
    //private: is accessible only on the server
    JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY,
    REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    public: {
      // public:is accessible on server and client
      FALL_BACK_IMG_URL: process.env.FALL_BACK_IMG_URL,
      DEFAULT_USER_AVATAR: process.env.DEFAULT_USER_AVATAR

    },
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})