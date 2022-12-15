import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-middleware-module",
  },
  async setup(_moduleOptions, nuxt) {
    nuxt.hook("ready", async () => {
      console.log("Custom module: Initialized");
    });
  },
});
