import { v4 as uuidv4 } from "uuid";

export default function MiddlewareModule(_moduleOptions) {
  this.nuxt.hook("ready", async (nuxt) => {
    nuxt.options.cli.badgeMessages.push(`Module-based UUID: ${uuidv4()}`);
  });
}
