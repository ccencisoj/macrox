import { existsFile } from "./existsFile";
import { createFile } from "./createFile";
import { deleteFile } from "./deleteFile";
import { toSpacedValue } from "./toSpacedValue";
import { executeCommand } from "./executeCommand";
import { toCamelCaseValue } from "./toCamelCaseValue";
import { toCapitalizedValue } from "./toCapitalizedValue";

const value = process.argv[2];
const spacedValue = toSpacedValue(value);
const camelCaseValue = toCamelCaseValue(value);
const capitalizedValue = toCapitalizedValue(value);

export {
  value,
  spacedValue,
  camelCaseValue,
  capitalizedValue,
  createFile,
  deleteFile,
  existsFile,
  executeCommand
}
