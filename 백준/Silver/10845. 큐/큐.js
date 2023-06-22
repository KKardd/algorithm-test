var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = parseInt(input[0]);
let Queue = [];
let answer = "";
for (let i = 1; i <= count; i++) {
    let temp = input[i].split(" ");
    let command = temp[0];
    let num;
    if (temp[1]) {
        num = temp[1];
    }
    switch (command) {
        case "push":
            Queue.push(num);
            break;
        case "pop":
            if (Queue.length) {
                answer += Queue.shift() + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "size":
            answer += Queue.length + "\n";
            break;
        case "empty":
            if (Queue.length) {
                answer += 0 + "\n";
            } else {
                answer += 1 + "\n";
            }
            break;
        case "front":
            if (Queue[0]) {
                answer += Queue[0] + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "back":
            if (Queue[Queue.length - 1]) {
                answer += Queue[Queue.length - 1] + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
    }
}
console.log(answer.slice(0, answer.length - 1));
