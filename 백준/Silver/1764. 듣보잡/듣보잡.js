const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const NM = input.shift();
const [N, M] = NM.split(" ").map(Number);
const obj = {};
let num = 0;
let answer = [];
for (let i = 0; i < N; i++) {
    obj[input[i]] = 1;
}
for (let i = N; i < input.length; i++) {
    if (obj[input[i]]) {
        num++;
        answer.push(input[i]);
    }
}
answer.sort((a, b) => {
    if (a < b) {
        return -1;
    }
});
console.log(num + "\n" + answer.join("\n"));
