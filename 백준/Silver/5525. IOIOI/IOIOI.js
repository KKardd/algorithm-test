const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const M = input[1];
let S = input[2];
let answer = 0;
const compareStr = "I" + "OI".repeat(N);
for (let i = 0; i < M - compareStr.length + 1; i++) {
    if (S[i] === "I") {
        const sliceS = S.slice(i, i + compareStr.length);
        if (sliceS === compareStr) {
            answer++;
        }
    }
}
console.log(answer);
