// ! Activity 3: Importing Entire Modules

// * Task 5

import * as math from "./allModules.mjs";

const sum = math.add(2, 2);
const diff = math.subtract(10, 5);
const multi = math.multiply(5, 2);
const qoutient = math.divide(10, 2);
const circleArea = math.PI * math.multiply(5, 5);

console.log(`Sum: ${sum}`);
console.log(`Diff: ${diff}`);
console.log(`Multi: ${multi}`);
console.log(`Quotient: ${qoutient}`);
console.log(`Circle Area: ${circleArea}`);
