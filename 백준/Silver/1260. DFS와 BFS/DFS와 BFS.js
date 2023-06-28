const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const NMV = input.shift().split(" ");
const N = Number(NMV.shift());
const M = Number(NMV.shift());
const V = Number(NMV.shift());
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
    return order.join(" ");
};

const BFS = (startNode) => {
    const needVisit = [startNode];
    const visited = Array(N + 1).fill(false);
    const order = [];

    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited[node]) {
            visited[node] = true;
            order.push(node);
            needVisit.push(...graph[node]);
        }
    }
    return order.join(" ");
};

graph.forEach((v) => v.sort((a, b) => b - a));
console.log(DFS(V));

graph.forEach((v) => v.sort((a, b) => a - b));
console.log(BFS(V));
