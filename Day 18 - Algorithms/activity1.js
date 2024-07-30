// ! Activity 1: Sorting Algorithms

// * Task 1

let arr = [5, 3, 18, 23];

function bubbleSortAlgo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
bubbleSortAlgo(arr);
console.log(`Array sorting after bubble sort: ${arr}`);

// * Task 2

function selectionSortAlgo(arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[j] < arr2[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr2[i];
      arr2[i] = arr2[minIndex];
      arr2[minIndex] = temp;
    }
  }
}

let arr2 = [60, 25, 12, 10, 5];
selectionSortAlgo(arr2);
console.log(`Sorted array using Selection Algo: ${arr2}`);

// * Task 3

function quickSortAlgo(arr3) {
  if (arr3.length <= 1) {
    return arr3;
  }

  let pivot = arr3[arr3.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr3.length - 1; i++) {
    if (arr3[i] < arr3[pivot]) {
      left.push(arr3[i]);
    } else {
      right.push(arr3[i]);
    }
  }
  return [...quickSortAlgo(left), pivot, ...quickSortAlgo(right)];
}

let arr3 = [10, 7, 8, 9, 1, 5];
quickSort(arr3);
console.log(`Sorted array Using Quick Sort: ${arr3}`);
