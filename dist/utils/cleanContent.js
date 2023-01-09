"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanContent = void 0;
const cleanExtralines_1 = require("./cleanExtralines");
const cleanExtraindents_1 = require("./cleanExtraindents");
const cleanContent = (content) => {
    content = (0, cleanExtralines_1.cleanExtraLines)(content);
    content = (0, cleanExtraindents_1.cleanExtraIndents)(content);
    return content;
};
exports.cleanContent = cleanContent;
