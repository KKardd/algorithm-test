function solution(operations) {
    let queue = [];
    for (let i = 0; i < operations.length; i++) {
        const num = parseInt(operations[i].split(" ")[1]);
        let idx;
        if (operations[i][0] === "I") {
            queue.push(num);
        } else {
            queue.sort((a, b) => a - b);
            if (num === -1) {
                queue.shift();
            } else {
                queue.pop();
            }
        }
        // console.log(queue);
    }
    if(queue.length === 0){
        return [0, 0];
    }else{
        return [Math.max(...queue), Math.min(...queue)];
    }
}