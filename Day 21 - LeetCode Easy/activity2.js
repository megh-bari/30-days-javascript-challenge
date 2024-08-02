// ! Reverse Integer

function reverseInteger(num) {
    const reverseNum = parseInt(Math.abs(num).toString().split('').reverse().join(''))
    
    if (reverseNum > 2147483647)  {
        return 0;
    }
    return num < 0 ? -Math.abs(reverseNum) : reverseNum
}

console.log(reverseInteger(1234))
console.log(reverseInteger(-567))


// * 2147483647 for maximum value for a positive 32-bit signed integer