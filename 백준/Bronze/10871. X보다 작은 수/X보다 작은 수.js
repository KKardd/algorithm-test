var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0].split(" ")[0]);
const X = parseInt(input[0].split(" ")[1]);

const arr = input[1].split(" ");
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (X > arr[i]) {
        result.push(arr[i]);
    }
}
console.log(result.join(" "));
