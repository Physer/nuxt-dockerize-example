export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "example",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  privateRuntimeConfig: {
    secret: process.env.SECRET,
  },
  publicRuntimeConfig: {
    applicationName: process.env.APPLICATION_NAME,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "~/modules/customModule",
    "~/modules/loremModule",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["~/modules/middlewareModule", "~/modules/uuidModule"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
