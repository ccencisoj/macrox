import fs from "fs-extra";

export const removeFile = (filePath: string): void => {
  fs.removeSync(filePath);
}
