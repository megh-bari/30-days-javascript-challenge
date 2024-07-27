// ! Activity 1: Understanding Closures

// * Task 1

function name() {
  let name = "Megh";
  function displayName() {
    console.log(name);
  }
  displayName();
}
name();

// * Task 2

function createCounter() {
    
    let count = 0 //* Private Variavbles

    function increment() {
        count++
    }
    function getValue() {
        return count;
    }

    return {increment, getValue}
}

const counter = createCounter()
console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())