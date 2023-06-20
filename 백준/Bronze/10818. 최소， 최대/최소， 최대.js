var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = input[0];
let min = 1000000;
let max = -1000000;
const arr = input[1].split(" ");
for (let i = 0; i < arr.length; i++) {
    if (max < parseInt(arr[i])) {
        max = parseInt(arr[i]);
    }
    if (min > parseInt(arr[i])) {
        min = parseInt(arr[i]);
    }
}
console.log(min + " " + max);
