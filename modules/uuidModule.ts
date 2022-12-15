import { defineNuxtModule } from "@nuxt/kit";
import { v4 as uuidv4 } from "uuid";

export default defineNuxtModule({
  meta: {
    name: "nuxt-uuid-module",
  },
  async setup(_moduleOptions, nuxt) {
    nuxt.hook("ready", async () => {
      console.log(`Module-based UUID: ${uuidv4()}`);
    });
  },
});
