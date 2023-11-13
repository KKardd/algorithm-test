#include <stdio.h>

#include <stdlib.h>

#include <time.h>

#define min(x, y)(x) < (y) ? (x) : (y)
int maxResult;
int resultX;
int resultY;
int n = 5; // n*n 랜덤 2차원 배열 생성시, 쓰이는 길이값
// n*n 배열 생성 함수
int ** makeMatrix(int n) {
  int ** matrix = (int ** ) malloc(n * sizeof(int * ));

  srand(time(NULL));

  for (int i = 0; i < n; i++) {
    matrix[i] = (int * ) malloc(n * sizeof(int));

    for (int j = 0; j < n; j++) {
      matrix[i][j] = rand() % 2;
    }
  }

  return matrix;
}

// n*n 배열 출력 함수
void printMatrix(int ** matrix, int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      printf("%d ", matrix[i][j]);
    }
    printf("\n");
  }
}

int ** makeDPMatrix(int ** M, int n) {
  int ** dpMatrix = (int ** ) malloc(n * sizeof(int * ));
  for (int i = 0; i < n; i++) {
    dpMatrix[i] = (int * ) malloc(n * sizeof(int));
    for (int j = 0; j < n; j++) {
      if (i == 0 || j == 0) { // 배열의 1행, 1열은 비교대상이 없으므로 무조건 1로 초기화
        dpMatrix[i][j] = 1;
        continue;
      }
      if (M[i][j] == M[i - 1][j - 1] && M[i - 1][j] == M[i][j - 1] && M[i][j] != M[i - 1][j]) {
        int xy1 = dpMatrix[i - 1][j - 1];
        int xy2 = dpMatrix[i - 1][j];
        int xy3 = dpMatrix[i][j - 1];
        int min1_2 = min(xy1, xy2);
        int min = min(min1_2, xy3); // 비교대상 3가지(DP테이블에서 현재 지점에서의 왼쪽, 왼쪽위, 위칸)의 최소값
        dpMatrix[i][j] = min + 1; // 최소값 + 1로 현재 DP테이블 지점 기입
        if (maxResult < min + 1) {
          resultX = i;
          resultY = j;
          maxResult = min + 1;
        }
      } else {
        dpMatrix[i][j] = 1; // 0과 1의 반복인 정사각형이 아님(즉, 이 지점에서의 최대 변의 길이는 1)
      }
    }
  }
  return dpMatrix;
}

int main() {
  int ** myMatrix = makeMatrix(n);
  printf("Matrix  ");
  printf("\n");
  printMatrix(myMatrix, n);
  printf("\n");

  int ** dpMatrix = makeDPMatrix(myMatrix, n);
  printf("DP Matrix  ");
  printf("\n");
  printMatrix(dpMatrix, n);
  printf("M[%d,%d]=%d", resultX + 1, resultY + 1, dpMatrix[resultX][resultY]);
  return 0;
}