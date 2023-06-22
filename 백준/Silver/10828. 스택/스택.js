var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = parseInt(input[0]);
let Stack = [];
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
            Stack.push(num);
            break;
        case "pop":
            if (Stack.length) {
                answer += Stack.pop() + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
        case "size":
            answer += Stack.length + "\n";
            break;
        case "empty":
            if (Stack.length) {
                answer += 0 + "\n";
            } else {
                answer += 1 + "\n";
            }
            break;
        case "top":
            if (Stack[Stack.length - 1]) {
                answer += Stack[Stack.length - 1] + "\n";
            } else {
                answer += -1 + "\n";
            }
            break;
    }
}
console.log(answer.slice(0, answer.length - 1));
