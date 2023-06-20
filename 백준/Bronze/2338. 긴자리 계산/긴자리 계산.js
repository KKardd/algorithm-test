var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n').map(BigInt);
var a = input[0];
var b = input[1];
console.log((a+b) + '\n' + (a-b) + "\n" + (a*b));