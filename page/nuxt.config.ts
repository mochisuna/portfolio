// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-18",
  devtools: { enabled: true },

  vue: {
    propsDestructure: true,
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },

  vite: {
    css: {
      preprocessorMaxWorkers: true, // number of CPUs minus 1
    },
  },

  modules: ["nuxt-svgo-loader"],
});
