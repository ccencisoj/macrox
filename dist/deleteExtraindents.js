"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExtraIndents = void 0;
const getMinIndentation_1 = require("./getMinIndentation");
const deleteExtraIndents = (content) => {
    // Obtener el minimo numero de espacios extras al principio de cada linea
    const minIndentation = (0, getMinIndentation_1.getMinIndentation)(content);
    // Eliminamos los espacios extras al principio de cada linea
    content = content.split("\n").map((line) => line.substring(minIndentation)).join("\n");
    return content;
};
exports.deleteExtraIndents = deleteExtraIndents;
