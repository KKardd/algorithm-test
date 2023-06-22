var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

let N = parseInt(input[0]);
const K = parseInt(input[1]);
let arr = Array(N)
    .fill(0)
    .map((v, idx) => idx);
let result = "<";

let idx = K - 1;
while (arr.length > 0) {
    if (arr[idx] >= 0) {
        result += arr[idx] + 1 + ", ";
        arr.splice(idx, 1);
        idx--;
    }
    for (let i = 0; i < K; i++) {
        idx++;
        if (idx >= arr.length) {
            idx = 0;
        }
    }
}

const realResult = result.slice(0, result.length - 2) + ">";
console.log(realResult);
