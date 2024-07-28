// ! Activity 3: String Manipulation with Recursion

// * Task 5

function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(`Reverse of Megh: ${reverseString("Megh")}`);
console.log(reverseString("Hello"));

// * Task 6

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function checkPalindrome(str, start, end) {
    if (start >= end) {
      return true;
    }
    if (str[start] !== str[end]) {
      return false;
    }
    return checkPalindrome(str, start + 1, end - 1);
  }
  return checkPalindrome(str, 0, str.length - 1);
}

console.log(isPalindrome("Megh"));
console.log(isPalindrome("Madam"));
