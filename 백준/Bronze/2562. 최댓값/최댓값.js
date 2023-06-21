var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const max = Math.max(...input);
const idx = input.indexOf(max.toString()) + 1;
console.log(max);
console.log(idx);
