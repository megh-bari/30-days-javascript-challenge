// ! Activity 3: Array Methos (Intermidiate)

// * Task 7

const numbers = [1,2,3,4,5]
const newArr = numbers.map(num => num * 2)
console.log(newArr)

// * Task 8

const evenNumber = numbers.filter(num => num%2==0)

console.log(evenNumber)

// * Task 9

const sumOfAllNumbers = numbers.reduce((acc, currentVal)=>{
    return acc + currentVal
},0)
console.log(sumOfAllNumbers)
