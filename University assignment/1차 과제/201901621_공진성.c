#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char** init(int *size) {
    // 파일 열기
    FILE* file = fopen("grade.txt", "r");
  
    int max_lines = 1000; // 최대 행 수를 정의
    char** lines = (char**)malloc(max_lines * sizeof(char*)); // 배열을 담기위한 메모리 할당

    int line_count = 0; // 인덱스
    char buffer[1000];

    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        // 행을 복사하여 배열에 저장
        lines[line_count] = strdup(buffer);
        line_count++;
    }

    // 파일 닫기
    fclose(file);

    *size = line_count;
    return lines;
}

int getScore(int arr[], int left, int right, int k) {
    if (left == right) {
        return arr[left];
    }

    // 피벗을 무작위로 선택
    int pivotIndex = left + rand() % (right - left + 1);
    int pivotValue = arr[pivotIndex];

    // 피벗을 기준으로 배열을 분할
    int i, j;
    int temp;

    // 피벗을 배열의 마지막 원소로 이동
    temp = arr[pivotIndex];
    arr[pivotIndex] = arr[right];
    arr[right] = temp;

    i = left;
    for (j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
            // 작은 값을 왼쪽으로 이동
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }

    // 피벗을 올바른 위치로 이동
    temp = arr[i];
    arr[i] = arr[right];
    arr[right] = temp;

    // 피벗의 위치를 확인한 후, k를 기준으로 왼쪽 또는 오른쪽 하위 배열을 나눠 분할정복으로 검사
    if (k < i) {
        return getScore(arr, left, i - 1, k);
    } else if (k > i) {
        return getScore(arr, i + 1, right, k);
    } else {
        return arr[i];
    }
}

char evalGrade(int lastStudentScoreA, int lastStudentScoreB, int myScore) {
  if(myScore > lastStudentScoreA){
    return 'A';
  } else if(myScore > lastStudentScoreB){
    return 'B';
  } else {
    return 'C';
  }
}

int handlingTieRunner(int scores[], int size, int score, int grade) {
  int tempScore = 0;
  int tempGrade = grade - 1;
  while(score >= tempScore && tempGrade > 1){
    tempScore = getScore(scores, 0, size - 1, size - tempGrade);
    tempGrade--;
  }
  return tempScore;
}

int run(int **grade[], int size) {
  int scores[size]; // 정수 배열을 저장할 공간을 할당
  for (int i = 0; i < size; i++) { // 문자열 배열을 정수 배열로 변환
    scores[i] = atoi(grade[i]);
  }
  
  int myScore;
  printf("201901621 공진성\n");
  printf("본인의 원점수를 입력해주세요 : ");
  scanf("%d", &myScore);    // 내 원점수 입력을 받아서 변수에 저장

  size++;
  scores[size - 1] = myScore; // 총 학생 수 증가 및 점수 배열에 내 점수 추가
 
  int lastStudentA = (int)size * 0.3;
  int lastStudentB = (int)size * 0.8;

  int lastStudentScoreA = getScore(scores, 0, size - 1, size - lastStudentA);
  if(lastStudentScoreA == getScore(scores, 0, size - 1, size - lastStudentA + 1) || lastStudentScoreA == getScore(scores, 0, size - 1, size - lastStudentA - 1)) {
    lastStudentScoreA = handlingTieRunner(scores, size, lastStudentScoreA, lastStudentA);
  } // 동점자 처리 로직
  int lastStudentScoreB = getScore(scores, 0, size - 1, size - lastStudentB);
  if(lastStudentScoreB == getScore(scores, 0, size - 1, size - lastStudentB + 1) || lastStudentScoreB == getScore(scores, 0, size - 1, size - lastStudentB - 1)) {
    lastStudentScoreB = handlingTieRunner(scores, size, lastStudentScoreB, lastStudentB);
  } // 동점자 처리 로직
  char myGrade = evalGrade(lastStudentScoreA, lastStudentScoreB, myScore); // 내 석차 확인
  printf("총 학생 수 (본인 포함) : %d명\n", size);
  printf("학점 당 학생 수 | A : %d명, B : %d명, C : %d명\n", lastStudentA, lastStudentB - lastStudentA, size - lastStudentB);
  printf("A학점 마지막 석차 학생의 원점수: %d\n", lastStudentScoreA);
  printf("B학점 마지막 석차 학생의 원점수: %d\n", lastStudentScoreB);
  printf("공진성 학생은 현재 %c학점에 해당하는 석차에 있습니다\n", myGrade);
  
  return 0;
}

int main() {
    int size;
    char** grade = init(&size);
    run(grade, size);
    return 0;
}