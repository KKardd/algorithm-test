/**
 * 문제 설명
문제 설명
주차장의 요금표와 차량이 들어오고(입차) 나간(출차) 기록이 주어졌을 때, 차량별로 주차 요금을 계산하려고 합니다. 아래는 하나의 예시를 나타냅니다.

요금표
기본 시간(분)	기본 요금(원)	단위 시간(분)	단위 요금(원)
180	5000	10	600
 

입/출차 기록
시각(시:분)	차량 번호	내역
05:34	5961	입차
06:00	0000	입차
06:34	0000	출차
07:59	5961	출차
07:59	0148	입차
18:59	0000	입차
19:09	0148	출차
22:59	5961	입차
23:00	5961	출차
 

자동차별 주차 요금
차량 번호	누적 주차 시간(분)	주차 요금(원)
0000	34 + 300 = 334	5000 + ⌈(334 - 180) / 10⌉ x 600 = 14600
0148	670	5000 +⌈(670 - 180) / 10⌉x 600 = 34400
5961	145 + 1 = 146	5000
어떤 차량이 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주합니다.
0000번 차량은 18:59에 입차된 이후, 출차된 내역이 없습니다. 따라서, 23:59에 출차된 것으로 간주합니다.
00:00부터 23:59까지의 입/출차 내역을 바탕으로 차량별 누적 주차 시간을 계산하여 요금을 일괄로 정산합니다.
누적 주차 시간이 기본 시간이하라면, 기본 요금을 청구합니다.
누적 주차 시간이 기본 시간을 초과하면, 기본 요금에 더해서, 초과한 시간에 대해서 단위 시간 마다 단위 요금을 청구합니다.
초과한 시간이 단위 시간으로 나누어 떨어지지 않으면, 올림합니다.
⌈a⌉ : a보다 작지 않은 최소의 정수를 의미합니다. 즉, 올림을 의미합니다.
주차 요금을 나타내는 정수 배열 fees, 자동차의 입/출차 내역을 나타내는 문자열 배열 records가 매개변수로 주어집니다. 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

제한사항
fees의 길이 = 4

fees[0] = 기본 시간(분)
1 ≤ fees[0] ≤ 1,439
fees[1] = 기본 요금(원)
0 ≤ fees[1] ≤ 100,000
fees[2] = 단위 시간(분)
1 ≤ fees[2] ≤ 1,439
fees[3] = 단위 요금(원)
1 ≤ fees[3] ≤ 10,000
1 ≤ records의 길이 ≤ 1,000

records의 각 원소는 "시각 차량번호 내역" 형식의 문자열입니다.
시각, 차량번호, 내역은 하나의 공백으로 구분되어 있습니다.
시각은 차량이 입차되거나 출차된 시각을 나타내며, HH:MM 형식의 길이 5인 문자열입니다.
HH:MM은 00:00부터 23:59까지 주어집니다.
잘못된 시각("25:22", "09:65" 등)은 입력으로 주어지지 않습니다.
차량번호는 자동차를 구분하기 위한, `0'~'9'로 구성된 길이 4인 문자열입니다.
내역은 길이 2 또는 3인 문자열로, IN 또는 OUT입니다. IN은 입차를, OUT은 출차를 의미합니다.
records의 원소들은 시각을 기준으로 오름차순으로 정렬되어 주어집니다.
records는 하루 동안의 입/출차된 기록만 담고 있으며, 입차된 차량이 다음날 출차되는 경우는 입력으로 주어지지 않습니다.
같은 시각에, 같은 차량번호의 내역이 2번 이상 나타내지 않습니다.
마지막 시각(23:59)에 입차되는 경우는 입력으로 주어지지 않습니다.
아래의 예를 포함하여, 잘못된 입력은 주어지지 않습니다.
주차장에 없는 차량이 출차되는 경우
주차장에 이미 있는 차량(차량번호가 같은 차량)이 다시 입차되는 경우

 */

function solution(fees, records) {
    // "05:34 5961 I"
    //  0123456789 11
    records.sort((a, b) => {
        if(parseInt(a.slice(6, 10)) > parseInt(b.slice(6, 10))){
            return 1;
        }else if(parseInt(a.slice(6, 10)) === parseInt(b.slice(6, 10))){
            if(a[11] === "O"){
                return 1;
            }else{
                return -1;
            }
        }else{
            return -1;
        }
    }) // 번호순으로 정렬
    records.sort((a, b) => {
        if(a.slice(6, 10) === b.slice(6, 10)){
            if(a.slice(0, 2) > b.slice(0, 2)){
                return 1;
            }else if(a.slice(0, 2) === b.slice(0, 2) && a.slice(3, 5) > b.slice(3, 5)){
                return 1;
            }else{
                return -1;
            }
        }else{
            return 1;
        }
    })
    
    let time = 0;
    let time_table = [];
    for(let i = 0; i < records.length; i++){
        const car_num = records[i].slice(6, 10);
        const hour = parseInt(records[i].slice(0, 2));
        const minute = parseInt(records[i].slice(3, 5));
        if(i === records.length - 1){
            if(records[i][11] === "I"){
                time += (23 - hour) * 60;
                time += 59 - minute;
            }
            time_table.push(time);
            break;
        }
        if(car_num != records[i+1].slice(6, 10)){
            if(records[i][11] === "I"){
                time += (23 - hour) * 60;
                time += 59 - minute;
            }
            time_table.push(time);
            time = 0;
        }else{
            if(records[i][11] === "O") continue;
            time += (parseInt(records[i+1].slice(0, 2)) - hour) * 60;
            time += parseInt(records[i+1].slice(3, 5)) - minute;
        }
    }
    const answer = time_table.map(item => {
        if(item <= fees[0]) return fees[1];
        else return Math.ceil((item - fees[0]) / fees[2]) * fees[3] + fees[1];
    })
    return answer;
}