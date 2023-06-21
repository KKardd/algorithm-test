var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const cnt = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(cnt + " * " + i + " = " + cnt * i);
}
