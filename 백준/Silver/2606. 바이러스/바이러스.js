const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
const edges = input.map((v) => v.split(" ").map(Number));
const graph = [...Array(N + 1)].map(() => []);
edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});
const DFS = (startNode) => {
    const needVisit = [startNode];
    const visited = Array(N + 1).fill(false);
    const order = [];

    while (needVisit.length !== 0) {
        const node = needVisit.pop();
        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            needVisit.push(...graph[node]);
        }
    }
    let num = 0;
    visited.forEach((v) => {
        if (v) num++;
    });
    return num - 1;
};

console.log(DFS(1));
