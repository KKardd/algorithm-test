/**
 * 문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

carpet.png

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

 */

function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;

    //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
    for (let height = 3; height <= brown; height++) {
        //임의의 높이로 나눌때 나머지가 없을경우만
        if (sum % height === 0) {
            //가로길이
            let weight = sum / height;

            //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
            //결과가 yellow와 같다면 해당 높이와 길이 리턴
            if ((height - 2) * (weight - 2) === yellow) {
                return [weight, height];
            }
        }
    }
    return answer;
}
