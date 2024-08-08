// ! Activity 1: Basic Regular Expressions

// * Task 1

const regex = /javascript/gi;

const str = "Javascript is versatile. I love javascript. Have you tried Javascript"

const match = str.match(regex)

console.log(match)

// * Task 2

const regExp = /\d/g;

const digit = "My birthdate is 18 JAN 2006"

const matchDigit = digit.match(regExp)

console.log(matchDigit)