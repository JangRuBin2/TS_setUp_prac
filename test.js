"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moudle_file_1 = require("./moudle-file");
var module_daegun_1 = require("./module-daegun");
console.log(moudle_file_1.data);
console.log((0, module_daegun_1.default)("대건"));
var a = 1;
var b = 2;
// vodi -> 회피하다? return이 없다.
function test2() {
    console.log("hi");
}
function test(a, b) {
    return a + b;
}
console.log(test(a, b));
test2();
