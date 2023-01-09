import fs from "fs-extra";

export const removeDir = (dirPath: string): void => {
  fs.removeSync(dirPath);
}
