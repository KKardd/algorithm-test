var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const count = input[0];

const arr = input[1].split(" ");
console.log(Math.min(...arr) + " " + Math.max(...arr));
