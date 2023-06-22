var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

input
    .filter((v, i) => i !== 0)
    .sort((a, b) => a - b)
    .forEach((v, i) => {
        answer += `${v}`;
        if (i !== input.length - 2) {
            answer += "\n";
        }
    });
console.log(answer);
