import customMiddleware from "../middleware/customMiddleware";

export default function MiddlewareModule(_moduleOptions) {
  this.addServerMiddleware(customMiddleware);
}
