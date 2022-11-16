import { LoremIpsum } from "lorem-ipsum";

export default function generateLoremIpsum() {
  const lorem = new LoremIpsum();
  return lorem.generateSentences();
}
