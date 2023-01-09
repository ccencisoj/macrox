"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareStrings = void 0;
const compareStrings = (string1, string2) => {
    return string1.replace(/( )|(\n)/g, "") === string2.replace(/( )|(\n)/g, "");
};
exports.compareStrings = compareStrings;
