var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (input[i] !== "0 0 0") {
    let line_arr = input[i].split(" ");
    line_arr.sort((a, b) => a - b);
    const line1 = parseInt(line_arr[0]);
    const line2 = parseInt(line_arr[1]);
    const line3 = parseInt(line_arr[2]);
    if (Math.pow(line3, 2) === Math.pow(line1, 2) + Math.pow(line2, 2)) {
        console.log("right");
    } else {
        console.log("wrong");
    }
    i++;
}
