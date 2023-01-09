import { removeDir } from "./removeDir";
import { existsFile } from "./existsFile";
import { createFile } from "./createFile";
import { removeFile } from "./removeFile";
import { toSpacedValue } from "./utils/toSpacedValue";
import { executeCommand } from "./executeCommand";
import { toCamelCaseValue } from "./utils/toCamelCaseValue";
import { toCapitalizedValue } from "./utils/toCapitalizedValue";

const value = process.argv[2];
const spacedValue = toSpacedValue(value);
const camelCaseValue = toCamelCaseValue(value);
const capitalizedValue = toCapitalizedValue(value);

export {
  value,
  spacedValue,
  camelCaseValue,
  capitalizedValue,
  removeDir,
  createFile,
  removeFile,
  existsFile,
  executeCommand
}
