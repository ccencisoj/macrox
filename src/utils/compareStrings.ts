export const compareStrings = (string1: string, string2: string): boolean => {
  return string1.replace(/( )|(\n)/g, "") === string2.replace(/( )|(\n)/g, "");
}
