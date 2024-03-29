/**
2016년
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 */

function solution(a, b) {
    var answer = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    let num = 31;
    let month = 1;
    let day = 1;
    let check = 0;
    const mon1 = [1, 3, 5, 7, 8, 10, 12];
    const mon2 = [4, 6, 9, 11];
    for(let i = 1; i < 32; i++){
        check++;
        day = i;
        console.log(month + " / " + day);
        if(month === a && day === b){
            let bingo = check % 7;
            return answer[bingo];
        }
        else if(i % num === 0){
            i = 0
            month++;
            if(mon1.includes(month) === true){
                num = 31;
            }
            else if(mon2.includes(month) === true){
                num = 30;
            }
            else{
                num = 29;
            }
        }
        
    }
}


/**
 * function solution(a, b) {
    var answer = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const dateMap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let date = 0;
    for(let i = 0; i < (a - 1); i++) {
        date += dateMap[i];
    }
    const term = ((date + b) % 7);
    console.log(term);
    return answer[term]

    이게 더 좋은 방법인듯.
 */