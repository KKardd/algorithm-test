var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1]
    .split(" ")
    .sort((a, b) => a - b)
    .map((v) => parseInt(v));
let max = arr[arr.length - 1];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += (arr[i] / max) * 100;
}
console.log(sum / arr.length);
