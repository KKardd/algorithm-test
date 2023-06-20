var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = input[0];
let sum = 0;
for (let i = 0; i < count; i++) {
    sum += parseInt(input[1][i]);
}
console.log(sum);
