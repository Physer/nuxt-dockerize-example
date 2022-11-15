import { v4 as uuidv4 } from "uuid";

export default function MiddlewareModule(_moduleOptions) {
  this.nuxt.hook("ready", async (_nuxt) => {
    console.log(`Module-based UUID: ${uuidv4()}`);
  });
}
