import { LoremIpsum } from "lorem-ipsum";

export default function MiddlewareModule(_moduleOptions) {
  const lorem = new LoremIpsum();
  this.nuxt.hook("ready", async (nuxt) => {
    nuxt.options.cli.badgeMessages.push(
      `Module-based lorem ipsum: ${lorem.generateWords(5)}`
    );
  });
}
