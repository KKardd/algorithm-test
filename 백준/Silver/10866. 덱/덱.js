var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = parseInt(input[0]);
let Deque = [];
let answer = "";
for (let i = 1; i <= count; i++) {
    let temp = input[i].split(" ");
    let command = temp[0];
    let num;
    if (temp[1]) {
        num = temp[1];
    }
    switch (command) {
        case "push_front":
            Deque.unshift(num);
            break;
        case "push_back":
            Deque.push(num);
            break;
        case "pop_front":
            if (Deque.length) {
                answer += Deque.shift() + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "pop_back":
            if (Deque.length) {
                answer += Deque.pop() + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "size":
            answer += Deque.length + "\n";
            break;
        case "empty":
            if (Deque.length) {
                answer += 0 + "\n";
            } else {
                answer += 1 + "\n";
            }
            break;
        case "front":
            if (Deque[0]) {
                answer += Deque[0] + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "back":
            if (Deque[Deque.length - 1]) {
                answer += Deque[Deque.length - 1] + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
    }
}
console.log(answer.slice(0, answer.length - 1));
