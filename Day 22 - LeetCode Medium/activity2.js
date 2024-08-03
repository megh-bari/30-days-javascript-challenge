// ! Longest Substring Without Repeating Character

function findLongestSubString(str) {
  let start = 0;
  let maxLength = 0;

  strMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (strMap.has(str[i])) {
      start = Math.max(start, strMap.get(str[i]) + 1);
    }
    strMap.set(str[i], i);

    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength
}

console.log(findLongestSubString("javascript is best language")) //* Output: 10
console.log(findLongestSubString("abcabcbb")); //* Output: 3
console.log(findLongestSubString("aaaa")); //* Output: 1
