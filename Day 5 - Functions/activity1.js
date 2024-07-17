// ! Activity 1: Function Declaration

// * Task 1

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`
    } else {
        return `${num} is Odd` 
    }
}

console.log(checkEvenOdd(5))
console.log(checkEvenOdd(2))

// * Task 2

function squareRoot(r) {
    return r * r
}
console.log(`Square Root of 2 is ${squareRoot(2)}`)