"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
const MyLabel = ({ label = "No Label", size = "normal", color = "primary", AllCaps = false, fontColor, backgroundColor = "transparent", }) => {
    return ((0, jsx_runtime_1.jsx)("span", { style: { color: fontColor, backgroundColor }, className: `label ${size} text-${color} `, children: AllCaps ? label.toLocaleUpperCase() : label }));
};
exports.MyLabel = MyLabel;
