/** 
 * 문제 설명
x축과 y축으로 이루어진 2차원 직교 좌표계에 중심이 원점인 서로 다른 크기의 원이 두 개 주어집니다. 반지름을 나타내는 두 정수 r1, r2가 매개변수로 주어질 때, 두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수를 return하도록 solution 함수를 완성해주세요.
※ 각 원 위의 점도 포함하여 셉니다.

제한 사항
1 ≤ r1 < r2 ≤ 1,000,000
입출력 예
r1	r2	result
2	3	20
*/

function solution(r1, r2) {
    let answer = 0;

    for (let i = 1; i < r2; i++) {
        if (i < r1) {
            answer += getMaxY(i, r2, "r2") - getMaxY(i, r1, "r1");
        } else {
            answer += getMaxY(i, r2, "r2");
        }
    }
    answer *= 4;
    answer += (r2 - r1 + 1) * 4;
    return answer;
}

function getMaxY(x, r, rName) {
    const max = Math.sqrt(r * r - x * x);
    const maxToInt = parseInt(max);
    if (rName == "r1" && max - maxToInt == 0.0) {
        return maxToInt - 1;
    } else {
        return maxToInt;
    }
}
