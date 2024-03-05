// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
      router: {
        base: '/commercial-site/'
      }
    },
    plugins: ["~/plugins/preline.client.ts"],
  })
  