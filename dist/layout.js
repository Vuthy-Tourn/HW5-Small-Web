"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = createLayout;
const Footer_1 = require("./components/Footer");
const Header_1 = require("./components/Header");
function createLayout(contentFn) {
    const app = document.getElementById("app");
    app.innerHTML = "";
    const header = (0, Header_1.Header)();
    const content = contentFn();
    const footer = (0, Footer_1.Footer)();
    app.append(header, content, footer);
}
