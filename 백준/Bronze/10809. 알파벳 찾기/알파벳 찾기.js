var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
const string = input[0];

let arr = Array(26).fill(-1);
const alphabat = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
for (let i = 0; i < string.length; i++) {
    const idx = alphabat.indexOf(string[i]);
    if (arr[idx] === -1) {
        arr[idx] = i;
    }
}
console.log(arr.join(" "));
