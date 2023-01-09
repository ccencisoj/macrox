import path from "path";
import fs from "fs-extra";
import { cleanContent } from "./utils/cleanContent";

export const createFile = (filePath: string, content: string): void => {
  fs.removeSync(filePath);
  fs.mkdirpSync(path.dirname(filePath));
  fs.writeFileSync(filePath, cleanContent(content));
}
