var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

i = 0;
while (input[i] != 0) {
    let isTrue = true;
    for (let j = 0; j < Math.floor(input[i].length / 2); j++) {
        if (input[i][j] !== input[i][input[i].length - 1 - j]) {
            isTrue = false;
            break;
        }
    }
    isTrue ? console.log("yes") : console.log("no");
    i++;
}
