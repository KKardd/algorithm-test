#include <stdio.h>

void swap(int *x, int *y) { // 원소의 자리를 바꿔주는 swap함수
  int temp = *x;
  *x = *y;
  *y = temp;
}

void bubbleSort(int arr[], int n) {
  // 검사해야하는 인덱스인지 판별해주는 변수 선언
  int checkIdx = n - 1;
  for (int i = 0; i < n-1; i++) {
    for (int j = 0; j < n-i-1; j++) {
      if(j > checkIdx){
        break; // 현재 검사지점 뒤에는 이미 정렬되어있으므로 break
      }
      if (arr[j] > arr[j+1]) {
        swap(&arr[j], &arr[j+1]);
      }
    }
    checkIdx--; // for문이 한번 돌때마다 확인해야하는 idx - 1
    }
}

void selectionSort(int arr[], int n) {
  for (int i = n - 1; i >= 0; i--) { // 배열의 최댓값부터 검사할것이므로 n-1부터 시작 후, i--해줌
    int idx = i;
    // 현재 위치부터 배열 끝까지 최댓값을 찾음
    for (int j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[idx]) {
        idx = j;
      }
    }

    // 최댓값과 현재 위치의 원소를 교환
    int temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
}


int main() {
  int arr1[] = {4, 3, 2, 1, 5};
  int arr2[] = {4, 3, 2, 1, 5};
  int n1 = sizeof(arr1) / sizeof(arr1[0]);
  int n2 = sizeof(arr2) / sizeof(arr2[0]);

  printf("초기 배열: ");
  for (int i = 0; i < n1; i++) {
      printf("%d ", arr1[i]);
  }
  printf("\n");
  bubbleSort(arr1, n1);
  selectionSort(arr2, n2);
    

  printf("BubbleSort: "); // BubbleSort print
  for (int i = 0; i < n1; i++) {
    printf("%d ", arr1[i]);
  }
  printf("\n");

  printf("SelectionSort: "); // SelectionSort print
  for (int i = 0; i < n2; i++){
    printf("%d ", arr2[i]);
  }
  printf("\n");
  
  return 0;
}