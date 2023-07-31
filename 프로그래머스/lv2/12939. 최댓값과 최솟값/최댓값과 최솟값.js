function solution(s) {
    var answer = '';
    let list = s.split(' ');
    list.sort();
    const max = Math.max(...list);
    const min = Math.min(...list);
    return min + ' ' + max;
}