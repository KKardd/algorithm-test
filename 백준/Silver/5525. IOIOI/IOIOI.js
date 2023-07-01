const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
let S = input[2];
let answer = 0;
let idx = 0;
let num = 0;
for (let i = 0; i < M; i++) {
    if (S[i] === "I") {
        num++;
        idx++;
    } else if (S[i] === "O") {
        num--;
        idx++;
    }
    if (num > 1) {
        num = 1;
        idx = 1;
        continue;
    } else if (num < 0) {
        num = 0;
        idx = 0;
        continue;
    }
    if (idx === 1 + 2 * N) {
        idx -= 2;
        num = 1;
        answer++;
    }
}
console.log(answer);
