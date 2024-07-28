// ! Activity 4: Recursive Search

// * Task 7

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// * Task  8

function countOccurence(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  const count =
    (arr[index] === target ? 1 : 0) + countOccurence(arr, target, index + 1);
  return count;
}

console.log(countOccurence([1, 2, 3, 2, 4, 5, 2, 4, 2, 2, 2], 2));
