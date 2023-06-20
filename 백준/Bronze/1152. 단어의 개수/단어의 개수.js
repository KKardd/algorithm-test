var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

if(input[0] !== ""){
    console.log(input.length);
}else{
    console.log(0);
}
