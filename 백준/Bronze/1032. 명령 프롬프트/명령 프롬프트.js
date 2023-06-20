var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().split('\n')

const count = input[0];
let str = input[1];
for (let i = 2; i <= count; i++) {
    let temp = "";
    for (let j = 0; j < input[i].length; j++) {
        if (str[j] != input[i][j]) {
            temp += "?";
        } else {
            temp += str[j];
        }
    }
    str = temp;
}
console.log(str);
