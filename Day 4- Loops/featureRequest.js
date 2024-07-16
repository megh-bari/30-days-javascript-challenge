// ! Feature Request:

// * Number Printing Script

for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
} //? Using for loop

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
} //? Using while loop

// * Multiplication Table Script

for (let i = 1; i <= 10; i++) {
  let result = 5 * i;
  console.log(`5 x ${i} = ${result}`);
}

// * Pattern Printing Script

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// * Sum Calculation Script

let num = 1;
let sum = 0;

while (num <= 10) {
  sum += num;
  num++;
}
console.log(sum);

// * Factorial Calculation Script

let i = 1;
let fact = 1;

do {
  fact *= i;
  i++;
} while (i <= 5);
console.log(fact);
