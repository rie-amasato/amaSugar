// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:  true,
  target: "static",
  css: ["@/assets/css/general.css", "@/assets/css/amasugar/amasugar.css"],
  app: {
    buildAssetsDir: '/sugar/',
    head: {
      title: "あまさとう パステル味のCSS集",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "device-width,initial-scale=1"
        },
        { 
          name: "description",
          content: "お砂糖をまとった（糖衣構文）ようなCSSを作りたいから始まったプロジェクト。パステル基調なCSSを目指して鋭意作成中。"
        },
      ]
    }
  }
})
