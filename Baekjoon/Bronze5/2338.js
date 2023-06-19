/**
 * https://www.acmicpc.net/problem/2338
 */

var fs = require("fs");
var input = fs.readFileSync("../test.txt").toString().split("\n").map(BigInt);
var a = input[0];
var b = input[1];
console.log(a + b + "\n" + (a - b) + "\n" + a * b);
