var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

const count = input[0];
let loc = "1";
for (let i = 1; i <= count; i++) {
    let X = input[i].split(" ")[0];
    let Y = input[i].split(" ")[1];
    if (X === loc) {
        loc = Y;
    } else if (Y === loc) {
        loc = X;
    }
}
console.log(loc);
