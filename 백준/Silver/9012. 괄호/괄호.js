var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = parseInt(input[0]);
for (let i = 1; i <= count; i++) {
    let str = input[i];
    let isVPN = false;
    let num = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[j] === "(") {
            num++;
        } else if (str[j] === ")") {
            num--;
        }
        if (num < 0) {
            break;
        }
    }
    if (num == 0) {
        isVPN = true;
    }
    isVPN ? console.log("YES") : console.log("NO");
}
