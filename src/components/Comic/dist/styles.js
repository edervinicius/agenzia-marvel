"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ComicContainer = void 0;
var styled_components_1 = require("styled-components");
exports.ComicContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px;\n  display: inline-block;\n  width: 200px;\n  .raro::before {\n    content: \"Item Raro\";\n    border-radius: 5px;\n    color: #fff;\n    padding: 5px;\n    width: 40px;\n    height: 40px;\n    font-size: 12px;\n    font-weight: bold;\n    letter-spacing: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    background: radial-gradient(\n        ellipse farthest-corner at right bottom,\n        #fedb37 0%,\n        #fdb931 8%,\n        #9f7928 30%,\n        #8a6e2f 40%,\n        transparent 80%\n      ),\n      radial-gradient(\n        ellipse farthest-corner at left top,\n        #ffffff 0%,\n        #ffffac 8%,\n        #d1b464 25%,\n        #5d4a1f 62.5%,\n        #5d4a1f 100%\n      );\n  }\n  .cover {\n    margin: 0 0 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 290px;\n    overflow-y: hidden;\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  }\n  .title {\n    h2 {\n      font-weight: bold;\n      font-size: 14px;\n    }\n  }\n  .price {\n    padding: 10px 0;\n    font-weight: bold;\n    font-size: 16px;\n  }\n"], ["\n  padding: 10px;\n  display: inline-block;\n  width: 200px;\n  .raro::before {\n    content: \"Item Raro\";\n    border-radius: 5px;\n    color: #fff;\n    padding: 5px;\n    width: 40px;\n    height: 40px;\n    font-size: 12px;\n    font-weight: bold;\n    letter-spacing: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    background: radial-gradient(\n        ellipse farthest-corner at right bottom,\n        #fedb37 0%,\n        #fdb931 8%,\n        #9f7928 30%,\n        #8a6e2f 40%,\n        transparent 80%\n      ),\n      radial-gradient(\n        ellipse farthest-corner at left top,\n        #ffffff 0%,\n        #ffffac 8%,\n        #d1b464 25%,\n        #5d4a1f 62.5%,\n        #5d4a1f 100%\n      );\n  }\n  .cover {\n    margin: 0 0 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 290px;\n    overflow-y: hidden;\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  }\n  .title {\n    h2 {\n      font-weight: bold;\n      font-size: 14px;\n    }\n  }\n  .price {\n    padding: 10px 0;\n    font-weight: bold;\n    font-size: 16px;\n  }\n"])));
var templateObject_1;
