var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

function gcd(a, b) {
    let R;
    while (a % b > 0) {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}

let a = parseInt(input[0]);
let b = parseInt(input[1]);
if (a < b) {
    let temp = a;
    a = b;
    b = temp;
}
const num = gcd(a, b);
const num2 = (a * b) / num;

console.log(num);
console.log(num2);
