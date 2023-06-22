var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cnt = input[0];
let arr = [];
let answer = "";
for (let i = 1; i <= cnt; i++) {
    let temp = input[i].split(" ");
    arr.push([parseInt(temp[0]), parseInt(temp[1])]);
}

arr.sort((a, b) => {
    if (a[0] < b[0]) {
        return -1;
    } else if (a[0] === b[0] && a[1] < b[1]) {
        return -1;
    }
}).forEach((v, i) => {
    answer += `${v[0]} ${v[1]}`;
    if (i !== arr.length - 1) {
        answer += "\n";
    }
});

console.log(answer);
