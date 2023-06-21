var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const count = input[0];

for (let i = 1; i <= count; i++) {
    const arr = input[i].split(" ");
    const H = parseInt(arr[0]);
    const W = parseInt(arr[1]);
    const N = parseInt(arr[2]);
    let floor = N % H;
    if (floor === 0) {
        floor = H;
    }
    let num = Math.floor((N - 1) / H) + 1;
    if (num < 10) {
        num = "0" + num;
    }
    console.log(floor.toString() + num);
}
