// ! Spread and Rest Operators

// * Task 5

const existingArr = [1, 2, 3, 4, 5];
const newArr = [...existingArr, 10, 20, 30, 40, 50];

console.log(...newArr);

// * Task 6

function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number
  }
  return total
}

console.log(sum(1,2,3,4))
