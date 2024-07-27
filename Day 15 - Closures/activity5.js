// ! Activity 5: Memorization

// * Task 7

function memorize(e) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (key in cache) {
      return cache[key];
    }
    const result = e(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  console.log("Computing....");
  return a + b;
}

const memorizeAdd = memorize(add);
console.log(memorizeAdd(2, 3));
console.log(memorizeAdd(2, 3));
console.log(memorizeAdd(3, 4));

// * Task 8


function memoizeFact(e) {
    const cache = {};
    
    return function(...args) {
      const key = args[0]; 
      if (key in cache) {
        return cache[key];
      }
      const result = e(...args); 
      cache[key] = result; 
      return result; 
    };
  }

function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num -1)
}

const memoizeFactorial = memoizeFact(factorial)

console.log(memoizeFactorial(5))
console.log(memoizeFactorial(5))
console.log(memoizeFactorial(6))