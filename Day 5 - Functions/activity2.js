// ! Activity 2: Function Expression

// * Task 3

const findMax = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

console.log(findMax(10, 2)); 

// * Task 4

const concatString = function(str1, str2) {
    return str1 + str2
}
console.log(concatString('Megh ', 'Bari'))