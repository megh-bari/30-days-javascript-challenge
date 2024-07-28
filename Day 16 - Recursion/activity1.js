// ! Activity 1: Basic Recursion

// * Task 1

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));

// * Task 2

function fibonacciSeries(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}

console.log(fibonacciSeries(3));
console.log(fibonacciSeries(5));
