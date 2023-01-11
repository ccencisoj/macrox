"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCapitalizedValue = void 0;
const toCamelCaseValue_1 = require("./toCamelCaseValue");
const toCapitalizedValue = (value) => {
    const camelCaseValue = (0, toCamelCaseValue_1.toCamelCaseValue)(value);
    return camelCaseValue.charAt(0).toUpperCase() + camelCaseValue.slice(1);
};
exports.toCapitalizedValue = toCapitalizedValue;
