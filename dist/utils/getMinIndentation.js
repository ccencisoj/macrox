"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinIndentation = void 0;
const getMinIndentation = (content) => {
    // Separar el string en líneas
    const lines = content.split('\n');
    // Eliminar espacios al principio de cada línea
    const strippedLines = lines.map((line) => line.replace(/^\s+/, ""));
    // Contar cuántos espacios minimos hay al principio de cada linea
    let minIndentation = Infinity;
    for (let i = 0; i < lines.length; i++) {
        const strippedLine = strippedLines[i];
        const originalLine = lines[i];
        const indentation = originalLine.length - strippedLine.length;
        if (indentation < minIndentation && strippedLine !== "") {
            minIndentation = indentation;
        }
    }
    return minIndentation === Infinity ? 0 : minIndentation;
};
exports.getMinIndentation = getMinIndentation;
