import { getMinIndentation } from "./getMinIndentation";

export const cleanExtraIndents = (content: string): string => {
  // Obtener el minimo numero de espacios extras al principio de cada linea
  const minIndentation = getMinIndentation(content);

  // Eliminamos los espacios extras al principio de cada linea
  content = content.split("\n").map((line)=> line.substring(minIndentation)).join("\n");

  return content;
}
