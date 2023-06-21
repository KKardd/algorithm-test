var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

const cnt = parseInt(input[0]);

for(let i = 1; i <= cnt; i++){
    let str = "";
    for(let j = 0; j < i; j++){
        str += "*";
    }
    console.log(str);
}