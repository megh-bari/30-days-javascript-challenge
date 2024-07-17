// ! Activity 3: Arrow Function

// * Task 5

const calculateSum = (num1, num2)=>{
 return num1 + num2
}

console.log(calculateSum(5,5))

// * Task 6

const containsSpecialCharacter = (str) => {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharacters.test(str);
};

console.log(containsSpecialCharacter("Hello, World!")); 
console.log(containsSpecialCharacter("HelloWorld"));    