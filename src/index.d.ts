declare module "macrox" {
  export const value: string;
  export const spacedValue: string;
  export const camelCaseValue: string;
  export const capitalizedValue: string;
  export function removeDir(dirPath: string): void;
  export function removeFile(filePath: string): void;
  export function createFile(filePath: string, content: string): void;
  export function existsFile(filePath: string, content?: string): boolean;
  export function executeCommand(command: string): void;
}
