const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map((v) => parseInt(v));
arr.sort((a, b) => a - b);
let answer = [arr[0]];
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
    answer.push(arr[i] + answer[i - 1]);
    sum += arr[i] + answer[i - 1];
}

console.log(sum);
