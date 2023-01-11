import { toCamelCaseValue } from "./toCamelCaseValue";

export const toCapitalizedValue = (value: string)=> {
  const camelCaseValue = toCamelCaseValue(value);
  return camelCaseValue.charAt(0).toUpperCase() + camelCaseValue.slice(1);
}
