/*
  Given a square matrix, calculate the absolute ..difference between the sums of its diagonals.
*/

// Example: 1 2 3
//          4 5 6
//          7 8 9
// Output: |15 - 17| = 2

function diagonalDifference(arr) {
  // Write your code here
  if (!arr.length) {
    return 0;
  }

  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let n = 0;

  while (n < arr.length) {
    leftDiagonal += arr[n][leftIndex];
    leftIndex++;

    rightDiagonal += arr[n][rightIndex];
    rightIndex--;

    n++;
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}
