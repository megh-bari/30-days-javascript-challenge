// ! Activity 4: Assertions and Boundaries

// * Task 7

const regexp = /^Hello/

const text1 = "Hello World"
const text2 = "World Hello"
const text3 = "Hello there!"

const match1 = text1.match(regexp)
const match2 = text2.match(regexp)
const match3 = text3.match(regexp)

console.log(`Match 1: ${match1}`)
console.log(`Match 2: ${match2}`)
console.log(`Match 3: ${match3}`)

// * Task 8

const exp = /World$/

const txt1 = "Hello World"
const txt2 = "World Hello"
const txt3 = "You are my World"

const mtch1 = txt1.match(exp)
const mtch2 = txt2.match(exp)
const mtch3 = txt3.match(exp)

console.log(`Match 1: ${mtch1}`)
console.log(`Match 2: ${mtch2}`)
console.log(`Match 3: ${mtch3}`)