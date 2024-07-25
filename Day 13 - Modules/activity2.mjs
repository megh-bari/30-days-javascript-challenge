// ! Named and Default Exports

// * Task 3

import { add, sub, multi, divide } from "./mathsFunctions.mjs";

const sum = add(5,3)
const difference = sub(10,5)
const product = multi(2,2)
const quotient = divide(10,2)

console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)

// * Task 4

import greet from './singleFunction.mjs'; 

const message = greet('Megh');
console.log(message); 