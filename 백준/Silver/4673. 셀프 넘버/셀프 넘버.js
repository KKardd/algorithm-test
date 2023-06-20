// var fs = require("fs");
// var input = fs.readFileSync("./test.txt").toString().split(" ");
// var input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = Array(10000)
    .fill()
    .map((arr, i) => {
        return i + 1;
    });
for (let i = 1; i < 10000; i++) {
    let num = i.toString();
    let sum = i;
    for (let j = 0; j < num.length; j++) {
        sum += parseInt(num[j]);
    }
    arr[sum - 1] = -1;
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1 && arr[i]) {
        console.log(arr[i]);
    }
}
