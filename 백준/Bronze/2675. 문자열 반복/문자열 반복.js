var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = input[0];

for (let i = 1; i <= count; i++) {
    const R = input[i].split(" ")[0];
    const str = input[i].split(" ")[1];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < R; j++) {
            result += str[i];
        }
    }
    console.log(result);
}
