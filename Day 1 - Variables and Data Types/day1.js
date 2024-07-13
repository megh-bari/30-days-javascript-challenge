// * Day 1 : Variables and Data Types

//!  Activity 1: Variable Declaration

// Task 1

var number = 18;
console.log(number);

// Task 2

let str = "30 Days Of Javascript Challenge";
console.log(str);

//! Activity 2: Constant Declaration

// Task 3

const bool_value = true;
console.log(bool_value);

//! Activity 3 : Data Types

// Task 4

let num = 18;
let strr = "Megh Bari";
let bool = true;
let obj = {
  course: "30 days javascript challenge",
  price: "FREE",
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(typeof(num))
console.log(typeof(strr))
console.log(typeof(bool))
console.log(typeof(obj))
console.log(typeof(arr))

//! Activity 4: Reassigning Variables

// Task 5

let initialVal = 18
console.log(`Initial Value: ${initialVal}`)
// reassign new value
initialVal = 23
console.log(`Reassign Value: ${initialVal}`)


//! Activity 5: Understanding const 
 
// Task 6

const newVal = 100
console.log(newVal)
// reassign value
// newVal = 200
// console.log(newVal) //!!! Error: Cannot reassign value to constant variables


// * Feature Request:

//  Q1
let nums = 999
let sub = "Javascript"
let boolean_Value = true
let books ={
    title: "Javascript",
    author: "Chai Aur Code"
}

let courses = ['Javascript', 'Python','NodeJS']

console.log(`${nums} and Type: ${typeof(nums)}`)
console.log(`${sub} and Type: ${typeof(sub)}`)
console.log(`${boolean_Value} and Type: ${typeof(boolean_Value)}`)
console.log(`${books.title} and Type: ${typeof(books)}`)
console.log(`${courses} and Type: ${typeof(courses)}`)

//  Q2

let iniVal = 10
const iniValue = 20
console.log(iniVal)
console.log(iniValue)

// reassignment 
iniVal = 50
console.log(iniVal)

iniValue = 100
// console.log(iniValue) //!!ERROR 