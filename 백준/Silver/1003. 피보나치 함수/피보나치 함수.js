let fs = require("fs");
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= parseInt(input[0]); i++) {
    const num = input[i];
    let fibArr = [
        [1, 0],
        [0, 1],
    ];
    for (let j = 2; j <= num; j++) {
        fibArr[j] = [fibArr[j - 2][0] + fibArr[j - 1][0], fibArr[j - 2][1] + fibArr[j - 1][1]];
    }
    console.log(fibArr[num].join(" "));
}
