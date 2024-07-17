// ! Feature Request

// * Even or Odd Script:

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`
    } else {
        return `${num} is Odd`
    }
}
console.log(checkEvenOdd(5))
console.log(checkEvenOdd(10))

// * Square Calculation Script:

function square(num) {
    return num * num
}

console.log(square(5))

// * Concatention Function Script:

const concatStr = function(str1, str2) {
    return str1 + str2
}
console.log(concatStr("Namaste ", "Duniya!"))

// * Sum Calculation Arrow Function Script:

const calculateSum = (num1, num2)=>{
    return num1 + num2
}
console.log(calculateSum(5,10))

// * Higher-Order Function Script:

function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function greet() {
    console.log("Hello!");
}

callNTimes(greet, 5); 
