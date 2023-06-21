var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const count = input[0];

for (let i = 1; i <= count; i++) {
    let num = 0;
    let con = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            con++;
            num += con;
        } else {
            con = 0;
        }
    }
    console.log(num);
}
