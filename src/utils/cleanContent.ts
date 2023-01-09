import { cleanExtraLines } from "./cleanExtralines";
import { cleanExtraIndents } from "./cleanExtraindents";

export const cleanContent = (content: string): string => {
  content = cleanExtraLines(content);
  content = cleanExtraIndents(content);
  return content;
}
