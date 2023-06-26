const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= parseInt(input[0]) * 3; i = i + 3) {
    const str = input[i];
    let arr = JSON.parse(input[i + 2]);
    let isReserve = false;
    let isError = false;
    for (let j = 0; j < str.length; j++) {
        if (str[j] === "D") {
            if (arr.length === 0) {
                isError = true;
                break;
            }
            if (isReserve) {
                arr.pop();
            } else {
                arr.shift();
            }
        } else {
            isReserve = !isReserve;
        }
    }
    if (isError) {
        console.log("error");
    } else {
        if (isReserve) {
            arr.reverse();
        }
        console.log(JSON.stringify(arr));
    }
}
