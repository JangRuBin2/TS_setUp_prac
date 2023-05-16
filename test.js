"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moudle_file_1 = require("./moudle-file");
var a = 1;
var b = 2;
console.log(moudle_file_1.data);
// vodi -> 회피하다? return이 없다.
function test2() {
    console.log("hi");
}
function test(a, b) {
    return a + b;
}
console.log(test(a, b));
test2();
