var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
const cnt = parseInt(input[0]);

for(let i = 1; i <= cnt; i++){
    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);
    console.log(a + b);
}
