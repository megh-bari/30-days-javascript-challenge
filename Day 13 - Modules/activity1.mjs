// ! Activity 1: Creating and Exporting Modules

// * Task 1

import addNum from "./addTwoNum.mjs";

const result = addNum(1, 2);
console.log(`The Result is: ${result}`); 

// * Task 2

import person from "./personModule.mjs";
console.log(person.greet())