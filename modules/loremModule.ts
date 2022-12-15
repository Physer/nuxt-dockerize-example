import { defineNuxtModule } from "@nuxt/kit";
import { LoremIpsum } from "lorem-ipsum";

export default defineNuxtModule({
  meta: {
    name: "nuxt-lorem-module",
  },
  async setup(_moduleOptions, nuxt) {
    const lorem = new LoremIpsum();
    nuxt.hook("ready", async () => {
      console.log(`Module-based lorem ipsum: ${lorem.generateWords(5)}`);
    });
  },
});
