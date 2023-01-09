"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existsFile = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const compareStrings_1 = require("./utils/compareStrings");
const existsFile = (filePath, content) => {
    const existsFilePath = fs_extra_1.default.existsSync(filePath);
    if (!existsFilePath || !content)
        return existsFilePath;
    const fileContent = fs_extra_1.default.readFileSync(filePath).toString();
    return (0, compareStrings_1.compareStrings)(content, fileContent);
};
exports.existsFile = existsFile;
