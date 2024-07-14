// ! Feature Request

//* Arithmetic Operator Script

let num1 = 10;
let num2 = 5;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);


//* Comparison and Logical Script

let val1 = 8;
let val2 = 12;

//? for comparison

let isGreaterThan = val1 > val2;
let isLessThan = val1 < val2;
let isEqual = val1 == val2;
let isNotEqual = val1 != val2;

let orResult = isGreaterThan || isLessThan
let andResult = isGreaterThan && isLessThan
let notResult = !isEqual


console.log(`Greater Than : ${isGreaterThan}`)
console.log(`Less Than : ${isLessThan}`)
console.log(`Equal : ${isEqual}`)
console.log(`Not Equal : ${isNotEqual}`)

console.log(`Comparing with OR: ${orResult}`)
console.log(`Comparing with AND: ${andResult}`)
console.log(`Comparing with NOT: ${notResult}`)

//* Ternary Operator Script

let num = 10
let result = (num>0) ? "Number is Positive" : "Number is Negative"
console.log(result)