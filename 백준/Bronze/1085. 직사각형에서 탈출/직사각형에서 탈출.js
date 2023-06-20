var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
let min = Math.min(x, w - x);
if (Math.min(y, h - y) < min) {
    min = Math.min(y, h - y);
}
console.log(min);
