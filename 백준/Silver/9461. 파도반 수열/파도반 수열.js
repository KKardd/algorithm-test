const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());
const max = Math.max(...input);
const arr = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let j = 11; j <= max; j++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 3]);
}

for (let i = 0; i < input.length; i++) {
    console.log(arr[input[i]]);
}
