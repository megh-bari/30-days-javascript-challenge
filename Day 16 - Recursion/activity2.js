// ! Activity 2: Recursion with Array

// * Task 3

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 10, 15]));

// * Task 4

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let maxOfRest = findMax(arr.slice(1));
  return Math.max(arr[0], maxOfRest);
}

console.log(findMax([1, 2, 3, 4]));
console.log(findMax([100, 2000, 30]));
