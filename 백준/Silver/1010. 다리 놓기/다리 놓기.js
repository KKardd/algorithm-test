var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

function fac(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num *= i;
    }
    return num;
}

const count = input[0];
for (let i = 1; i <= count; i++) {
    const N = parseInt(input[i].split(" ")[0]);
    const M = parseInt(input[i].split(" ")[1]);
    const p = fac(M);
    const q = fac(M - N) * fac(N);
    console.log(Math.round(p / q));
}
