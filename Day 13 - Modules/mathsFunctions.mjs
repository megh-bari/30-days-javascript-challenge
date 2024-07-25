// * Task 3

export function add(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}

export function multi(a,b){
    return a * b;
}

export function divide(a,b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed!')
  }  
  return a / b;
}