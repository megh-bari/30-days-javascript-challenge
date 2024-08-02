// ! Palindrome Number 


function checkPalindrome(num) {
    let numStr = Math.abs(num).toString()
    let result = numStr.split('').reverse().join('')

    return numStr === result
}

console.log(checkPalindrome(121)) //* True 
console.log(checkPalindrome(1234)) //* False 