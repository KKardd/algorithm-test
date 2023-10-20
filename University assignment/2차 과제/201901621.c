#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char characters[16];
int numbers[16];
int dataCount = 0;
char ticketOffice1[25] = ""; // 넉넉하게 25자리 준비
char ticketOffice2[25] = "";
char ticketOffice3[25] = "XXXXXXXXX";
char ticketOffice4[25] = "XXXXXXXXX"; // 7시30분까지 닫아져있으므로 X 9개 담아둠
int time = 1; // 문자열 길이와 측정하기위해 시간을 6시부터 1로 치환하고, 10분이 지나갈때마다 1을 더해준다.

void init() {
  // 파일 열기
  FILE *file = fopen("test.txt", "r");

  int max_lines = 1000; // 최대 행 수를 정의
  char **lines = (char **)malloc(max_lines * sizeof(char *)); // 배열을 담기위한 메모리 할당

  int idx = 0; // 인덱스
  char buffer[1000];

  while (!feof(file) && idx < 16) {
    char character;
    int number;
    if (fscanf(file, " %c %d", &character, &number) == 2) { // 문자와 숫자를 배열에 저장
      characters[idx] = character;
      numbers[idx] = number;
    }
    idx++;
    dataCount++;
  }
  // 파일 닫기
  fclose(file);
}

void bubble_sort(int count) { // 비교 함수(버블 솔트)
  int numTemp;
  char charTemp;
  for (int i = 0; i < 6; i++) {
    for (int j = 0; j < 5; j++) {
      if (numbers[j] > numbers[j + 1]) {
        numTemp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = numTemp;

        charTemp = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = charTemp;
      } else if (numbers[j] == numbers[j + 1]) {
        if (characters[j] > characters[j + 1]) {
          charTemp = characters[j];
          characters[j] = characters[j + 1];
          characters[j + 1] = charTemp;
        }
      }
    }
  } // 먼저 오는 6가족 정렬
  for (int i = 6; i < 16; i++) {
    for (int j = 6; j < 15; j++) {
      if (numbers[j] > numbers[j + 1]) {
        numTemp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = numTemp;
        charTemp = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = charTemp;
      } else if (numbers[j] == numbers[j + 1]) {
        if (characters[j] > characters[j + 1]) {
          charTemp = characters[j];
          characters[j] = characters[j + 1];
          characters[j + 1] = charTemp;
        }
      }
    }
  } // 나중에 오는 10가족 정렬
}

void ticketOfiiceTo6PM() { // 6시에 온 가족들을 전부 매표처리 완료했을때 데이터 전처리
  int office1Num = strlen(ticketOffice1);
  int office2Num = strlen(ticketOffice2);

  while (office1Num < 9) { // 매표소에 들어올 가족이 없을때, X문자 추가
    strcat(ticketOffice1, "X");
    office1Num++;
  }
  while (office2Num < 9) { // 2번 매표소도 반복
    strcat(ticketOffice2, "X");
    office2Num++;
  }
}

int getCurIdx() { // 현재 어떤 가족이 들어가는게 효율적인지 판단하는 함수
  int curNumber = 0;
  while (numbers[curNumber] == 0) {
    if(time < 9 && curNumber >= 5){ // 아직 7시 30분이 안 됐는데, 7시 30분 이후에 오는 가족을 받는 경우
      time = 9; // 시간을 7시 30분으로 돌린다.
      ticketOfiiceTo6PM(); // 데이터 전처리 함수
    }
    curNumber++;
    if (curNumber == 16) {
      return -1; // 만약 모든 가족이 표 구매에 성공했다면 -1 리턴
    }
  }
  return curNumber; // 그 가족의 idx값을 반환
}

void sellTicket() {
  while (time <= 18 && getCurIdx() != -1) {
    int office1Num = strlen(ticketOffice1);
    int office2Num = strlen(ticketOffice2);
    int office3Num = strlen(ticketOffice3);
    int office4Num = strlen(ticketOffice4);
    int curIdx = getCurIdx(); // 현재 어떤 가족이 입장해야하는지 찾고, 그 가족의 인덱스를 받아옴
    if (office1Num < time) {
      while (numbers[curIdx] > 0) { // 그 가족의 인원들이 다 표를 구매할때까지
        strncat(ticketOffice1, &characters[curIdx], 1);
        numbers[curIdx]--;
      }
      curIdx = getCurIdx(); // 현재 가족들이 표를 다 구매했으니, 다음 표를 구매할 가족 찾기
    }
    if (office2Num < time) { // 2 ~ 4번 매표소도 실행
      while (numbers[curIdx] > 0) {
        strncat(ticketOffice2, &characters[curIdx], 1);
        numbers[curIdx]--;
      }
      curIdx = getCurIdx();
    }
    if (office3Num < time) {
      while (numbers[curIdx] > 0) {
        strncat(ticketOffice3, &characters[curIdx], 1);
        numbers[curIdx]--;
      }
      curIdx = getCurIdx();
    }
    if (office4Num < time) {
      while (numbers[curIdx] > 0) {
        strncat(ticketOffice4, &characters[curIdx], 1);
        numbers[curIdx]--;
      }
      curIdx = getCurIdx();
    }
    time++; // 시간값 증가
  }
}

void trimString(char *str) { // 매표소에 9시 이후에 가족이 들어올 경우
  if (strlen(str) > 18) {
    str[18] = '\0'; // 18번째 문자를 널 종료 문자로 설정
  }
}

void closeTicketOfiice() { // 매표소를 닫을때 데이터 전처리
  int office1Num = strlen(ticketOffice1);
  int office2Num = strlen(ticketOffice2);
  int office3Num = strlen(ticketOffice3);
  int office4Num = strlen(ticketOffice4);

  while (office1Num < 18) { // 매표소에 들어올 가족이 없을때, X문자 추가
    strcat(ticketOffice1, "X");
    office1Num++;
  }
  while (office2Num < 18) { // 2~4번 매표소도 반복
    strcat(ticketOffice2, "X");
    office2Num++;
  }
  while (office3Num < 18) {
    strcat(ticketOffice3, "X");
    office3Num++;
  }
  while (office4Num < 18) {
    strcat(ticketOffice4, "X");
    office4Num++;
  }

  trimString(ticketOffice1); // 만약 9시 넘어서까지 매표를 시도한 사람이 있다면 잘라내기
  trimString(ticketOffice2); // 2~4번 매표소도 반복
  trimString(ticketOffice3);
  trimString(ticketOffice4);
}

void run() {
  bubble_sort(dataCount);
  sellTicket();
  closeTicketOfiice();
  printf("201901621 공진성\n");
  printf("1번 매표소 : %s\n", ticketOffice1);
  printf("2번 매표소 : %s\n", ticketOffice2);
  printf("3번 매표소 : %s\n", ticketOffice3);
  printf("4번 매표소 : %s\n", ticketOffice4);
}

int main(void) {
  init();
  run();
  return 0;
}