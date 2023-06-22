var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = parseInt(input[0]);

let arr = input
    .filter((v, i) => i !== 0)
    .map((v, i) => {
        let sub_arr = v.split(" ");
        return [sub_arr[0], sub_arr[1]];
    });
answer = "";
arr.sort((a, b) => a[0] - b[0]) //
    .forEach((v, i) => {
        answer += `${v.join(" ")}`;
        if (i !== arr.length - 1) {
            answer += "\n";
        }
    });
console.log(answer);
