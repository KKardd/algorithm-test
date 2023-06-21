var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = input[0];
const b = parseInt(input[1]);
console.log(a[b - 1]);
