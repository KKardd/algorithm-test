var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let arr = [];
input.forEach((v, i) => {
    if (arr.indexOf(v) === -1) {
        arr.push(v);
    }
});
arr.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length === b.length) {
        if (a < b) {
            return -1;
        }
    } else if (a.length > b.length) {
        return 1;
    }
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
