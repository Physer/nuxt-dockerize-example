import { LoremIpsum } from "lorem-ipsum";

export function generateLoremIpsum() {
  const lorem = new LoremIpsum();
  return lorem.generateSentences();
}
