var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const num = parseInt(input[0]);
let half = 64;
let cnt = 1;
let size = 0;
while (half > num) {
    half /= 2;
}
size = half;
while (num - size > 0) {
    if (num < size + half / 2) {
        half /= 2;
        continue;
    } else {
        size += half / 2;
        half /= 2;
        cnt++;
    }
}
console.log(cnt);
