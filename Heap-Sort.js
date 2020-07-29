/** refered to https://velog.io/@yujo/JS%ED%9E%99-%EC%A0%95%EB%A0%ACHeap-Sort-66pye5v9 */

let arrLen;

function swap(input, i, j) {
  [input[i], input[j]] = [input[j], input[i]];
}

function heapRoot(input, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let max = i;

  if (left < arrLen && input[left] > input[max]) {
    max = left;
  }
  if (right < arrLen && input[right] > input[max]) {
    max = right;
  }
  if (max !== i) {
    swap(input, max, i);
    heapRoot(input, max);
  }
}

function heapSort(input) {
  arrLen = input.length;
  for (let i = Math.floor(arrLen / 2); i >= 0; i--) {
    heapRoot(input, i);
  }
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLen--;
    heapRoot(input, 0);
  }
}
