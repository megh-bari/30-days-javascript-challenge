//! Activity 3: String Algorithms


// * Task 6

function countChar(str) {
    let obj = {};
    for (const char of str) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    return obj;
}
console.log(countChar("My name is Meet Javiya".toLowerCase()));


// * Task 7

function longestSubstring(str) {
    let start = 0;
    let end = 0;
    let charSet = new Set();
    let maxLength = 0;
    while (end < str.length) {
        if (!charSet.has(str[end])) {
            charSet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            charSet.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}
console.log(longestSubstring("hellothisismegh"));