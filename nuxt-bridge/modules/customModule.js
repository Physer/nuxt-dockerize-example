export default function MiddlewareModule(_moduleOptions) {
  this.nuxt.hook("ready", async (nuxt) => {
    nuxt.options.cli.badgeMessages.push("Custom module: Initialized");
  });
}
