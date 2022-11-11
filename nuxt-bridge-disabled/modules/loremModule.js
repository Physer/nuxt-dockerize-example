import { LoremIpsum } from "lorem-ipsum";

export default function MiddlewareModule(_moduleOptions) {
  const lorem = new LoremIpsum();
  this.nuxt.hook("ready", async (_nuxt) => {
    console.log(`Module-based lorem ipsum: ${lorem.generateWords(5)}`);
  });
}
