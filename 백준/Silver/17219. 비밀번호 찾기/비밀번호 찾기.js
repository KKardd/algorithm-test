const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const siteNum = parseInt(input.shift().split(" ")[0]);
let map = {};
let answer = "";
for (let i = 0; i < siteNum; i++) {
    const site = input[i].split(" ");
    map[site[0]] = site[1];
}
for (let i = siteNum; i < input.length; i++) {
    const compareURL = input[i];
    answer += map[compareURL] + "\n";
}
console.log(answer.slice(0, answer.length - 1));
