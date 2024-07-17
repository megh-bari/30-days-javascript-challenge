// ! Activity 4: Function Parameter and Default values

// * Task 7

const multiply = (num1, num2 = 1 )=>{
    return num1 * num2
}

console.log(multiply(5,10))
console.log(multiply(7))

// ? num2 has a default value of 1. This means that if num2 is not provided when the function is called, it will default to 1

// * Task 8
const greet = (name, age = 18) => {
    return `Namaste ${name}, you are ${age} years old`;
}

console.log(greet('Megh'));
