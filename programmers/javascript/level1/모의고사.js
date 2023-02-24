/**
 * 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

 */


function solution(answers) {
    var answer = [];
    let stu_1 = [1,2,3,4,5];
    let stu_2 = [2,1,2,3,2,4,2,5];
    let stu_3 = [3,3,1,1,2,2,4,4,5,5];
    let result_1 = 0;
    let result_2 = 0;
    let result_3 = 0;
    let result_arr = [];
    while(stu_1.length < answers.length){
        stu_1 = stu_1.concat(stu_1);
    }
    while(stu_2.length < answers.length){
        stu_2 = stu_2.concat(stu_2);
    }
    while(stu_3.length < answers.length){
        stu_3 = stu_3.concat(stu_3);
    }
    for(let i = 0; i < answers.length; i++){
        if(stu_1[i] === answers[i]){
            result_1++;
        }
        if(stu_2[i] === answers[i]){
            result_2++;
        }
        if(stu_3[i] === answers[i]){
            result_3++;
        }
    }
    result_arr.push(result_1);
    result_arr.push(result_2);
    result_arr.push(result_3);
    const max = Math.max(...result_arr);
    for(let i = 0; i < result_arr.length; i++){
        if(result_arr[i] === max){
            answer.push(i+1);
        }
    }
    return answer;
}