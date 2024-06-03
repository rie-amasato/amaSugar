// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:  true,
  target: "static",
  css: ["@/assets/css/general.css", "@/assets/css/amasugar/amasugar.css"]
})
