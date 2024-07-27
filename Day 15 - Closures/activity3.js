// ! Activity 3: Closure in Loops

// * Task 5

function createFunctionOfArray(size) {
  const functions = [];
  for (let i = 0; i < size; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}

const funcArr = createFunctionOfArray(5);
funcArr.forEach((element) => element());
