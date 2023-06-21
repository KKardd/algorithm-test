var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
while (input[i]) {
    let a = parseInt(input[i].split(" ")[0]);
    let b = parseInt(input[i].split(" ")[1]);
    i++;
    console.log(a + b);
}
