"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = exports.existsFile = exports.removeFile = exports.createFile = exports.removeDir = exports.capitalizedValue = exports.camelCaseValue = exports.spacedValue = exports.value = void 0;
const removeDir_1 = require("./removeDir");
Object.defineProperty(exports, "removeDir", { enumerable: true, get: function () { return removeDir_1.removeDir; } });
const existsFile_1 = require("./existsFile");
Object.defineProperty(exports, "existsFile", { enumerable: true, get: function () { return existsFile_1.existsFile; } });
const createFile_1 = require("./createFile");
Object.defineProperty(exports, "createFile", { enumerable: true, get: function () { return createFile_1.createFile; } });
const removeFile_1 = require("./removeFile");
Object.defineProperty(exports, "removeFile", { enumerable: true, get: function () { return removeFile_1.removeFile; } });
const toSpacedValue_1 = require("./utils/toSpacedValue");
const executeCommand_1 = require("./executeCommand");
Object.defineProperty(exports, "executeCommand", { enumerable: true, get: function () { return executeCommand_1.executeCommand; } });
const toCamelCaseValue_1 = require("./utils/toCamelCaseValue");
const toCapitalizedValue_1 = require("./utils/toCapitalizedValue");
const value = process.argv[2];
exports.value = value;
const spacedValue = (0, toSpacedValue_1.toSpacedValue)(value);
exports.spacedValue = spacedValue;
const camelCaseValue = (0, toCamelCaseValue_1.toCamelCaseValue)(value);
exports.camelCaseValue = camelCaseValue;
const capitalizedValue = (0, toCapitalizedValue_1.toCapitalizedValue)(value);
exports.capitalizedValue = capitalizedValue;
