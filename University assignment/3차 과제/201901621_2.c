#include <stdio.h>

#include <stdlib.h>

#include <time.h>

#define max(x, y)(x) < (y) ? (y) : (x)
int n = 14; // 랜덤으로 생성할 길이

// 길이가 n인 문자열 생성 함수
char * makeString(int n) {
  char * str = (char * ) malloc(n * sizeof(char));

  srand(time(NULL));

  for (int i = 0; i < n; i++) {
    str[i] = rand() % 26 + 'A';
  }

  return str;
}

int palindrome(char * s, int i, int j) {
  // 초기화
  int maxLength = 1; // 회문의 최소 길이는 1
  int table[n + 1][n + 1]; // 문자열 길이에 따른 테이블 (최대 문자열 길이에 따라 조정)
  memset(table, 0, sizeof(table)); // 테이블 초기화

  for (int k = 0; k <= j; k++) { // 어떠한 경우에서든 회문의 최소값은 1이므로 1로 초기화.
    table[k][k] = 1;
  }

  // 길이가 2인 회문 확인
  for (int k = 0; k < j; k++) {
    if (s[k] == s[k + 1]) {
      table[k][k + 1] = 1;
      maxLength = 2;
    }
  }

  // 길이가 3 이상인 회문 확인
  for (int length = 3; length <= j; length++) {
    for (int start = 0; start < j - length + 1; start++) {
      int end = start + length - 1;
      // start와 end 문자가 같고, 그 사이의 문자열도 회문이면
      if (s[start] == s[end] && table[start + 1][end - 1]) {
        table[start][end] = 1;
        maxLength = length; // 현재까지의 최대 회문 길이 갱신
      }
    }
  }
  return maxLength;
}

int main() {
  char * str = makeString(n);
  printf("%s\n", str);
  int length = strlen(str);
  int result = palindrome(str, 0, length - 1);
  printf("가장 긴 연속적인 회문의 길이: %d\n", result);
  return 0;
}