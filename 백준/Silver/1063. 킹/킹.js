var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

function check(loc, move) {
    const x_arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let x = loc[0];
    let y = loc[1];
    if (x === "H" && move[0] === "R") {
        return loc;
    } else if (x === "A" && move[0] === "L") {
        return loc;
    } else if (y === "1" && (move[0] === "B" || move[1] === "B")) {
        return loc;
    } else if (y === "8" && (move[0] === "T" || move[1] === "T")) {
        return loc;
    } else {
        let idx;
        let num;
        switch (move) {
            case "R":
                idx = x_arr.indexOf(x);
                x = x_arr[idx + 1];
                break;
            case "L":
                idx = x_arr.indexOf(x);
                x = x_arr[idx - 1];
                break;
            case "B":
                num = parseInt(y) - 1;
                y = num.toString();
                break;
            case "T":
                num = parseInt(y) + 1;
                y = num.toString();
                break;
            case "RT":
                idx = x_arr.indexOf(x);
                x = x_arr[idx + 1];
                num = parseInt(y) + 1;
                y = num.toString();
                break;
            case "LT":
                idx = x_arr.indexOf(x);
                x = x_arr[idx - 1];
                num = parseInt(y) + 1;
                y = num.toString();
                break;
            case "RB":
                idx = x_arr.indexOf(x);
                x = x_arr[idx + 1];
                num = parseInt(y) - 1;
                y = num.toString();
                break;
            case "LB":
                idx = x_arr.indexOf(x);
                x = x_arr[idx - 1];
                num = parseInt(y) - 1;
                y = num.toString();
                break;
        }
        return [x, y].join("");
    }
}

let king = input[0].split(" ")[0];
let stone = input[0].split(" ")[1];
const count = input[0].split(" ")[2];

for (let i = 1; i <= count; i++) {
    const move = input[i];
    if (check(king, move) === stone) {
        if (check(king, move) === check(stone, move)) {
            continue;
        }
        king = check(king, move);
        stone = check(stone, move);
    } else {
        king = check(king, move);
    }
}
console.log(king);
console.log(stone);
