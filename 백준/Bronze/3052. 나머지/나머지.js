var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(input[i]) % 42;
    if (arr.indexOf(num) === -1) {
        arr.push(num);
    }
}
console.log(arr.length);
