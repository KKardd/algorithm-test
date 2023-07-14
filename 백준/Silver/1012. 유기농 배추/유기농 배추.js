const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
for (let i = 0; i < T; i++) {
    const MNK = input.shift();
    let [M, N, K] = MNK.split(" ").map((v) => Number(v));
    const graph = Array.from(Array(N + 5).fill(false), () => Array(M + 5).fill(false));
    for (let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(" ");
        graph[Number(y) + 1][Number(x) + 1] = true;
    }
    let answer = 0;
    for (let j = 1; j <= N; j++) {
        for (let k = 1; k <= M; k++) {
            if (graph[j][k]) {
                dfs(k, j, graph);
                answer++;
            }
        }
    }
    console.log(answer);
}

function dfs(x, y, graph) {
    const row = [0, 0, 1, -1];
    const col = [1, -1, 0, 0];
    graph[y][x] = false;
    for (let i = 0; i < 4; i++) {
        const newX = Number(x) + row[i];
        const newY = Number(y) + col[i];
        if (graph[newY][newX]) {
            dfs(newX, newY, graph);
        }
    }
}
