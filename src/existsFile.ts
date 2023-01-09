import fs from "fs-extra";
import { compareStrings } from "./utils/compareStrings";

export const existsFile = (filePath: string, content?: string): boolean => {
  const existsFilePath = fs.existsSync(filePath);

  if(!existsFilePath || !content) return existsFilePath;

  const fileContent = fs.readFileSync(filePath).toString();

  return compareStrings(content, fileContent);
}
