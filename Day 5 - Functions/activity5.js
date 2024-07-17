// ! Activity 5: Higher-Order Functions

// * Task 9

function callManyTimes(func, n) {

    for (let i = 0; i <n; i++) {
        func()
    }
    
}

function greet() {
    console.log("Hello!")
}

callManyTimes(greet,5)


// * Task 10

function applyFunction(func1, func2, value) {
    const result1 = func1(value)
    const findResult = func2(result1)
    return findResult
}

const double = (a)=>{
    return a * 2
}

const square = (a)=>{
    return a*a
}

const value = 5

const result = applyFunction(double, square, value)
console.log(result) 
//? Output: 100 (because double(5) = 10 and square(10) = 100)