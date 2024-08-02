// ! Valid Parentheses

const isValid = (s) => {
  const stack = [];

  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      let last = stack.pop();

      if (char !== map[last]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}"));  //* True - All brackets are properly nested and closed.
console.log(isValid("({[()]})"));  //* True - Properly nested and matched brackets.
console.log(isValid("{[(])}"));  //* False - Incorrect nesting of brackets.
console.log(isValid("(((("));  //* False - Unmatched opening brackets.
console.log(isValid("(()))("));  //* False - Mixed unmatched opening and closing brackets.
console.log(isValid(""));  //* True - An empty string is considered valid.
console.log(isValid("{{}}"));  //* True - Properly matched and nested brackets.
console.log(isValid("[]{}()"));  //* True - All types of brackets properly matched and nested.
console.log(isValid("((([])))"));  //* True - Properly nested and matched brackets.
console.log(isValid("{[}"));  //* False - Unmatched brackets with incorrect order.
