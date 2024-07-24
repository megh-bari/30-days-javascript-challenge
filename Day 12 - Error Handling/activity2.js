// ! Activity 2: Finally Block

// * Task 3

function executeCode() {
  try {
    console.log("In the try block");
    throw new Error("Something went wrong!");
    console.log("This line will not execute due to  the error above");
  } catch (error) {
    console.log("In the catch block");
    console.log('Error Caught:', error.message)
  } finally {
    console.log('In the finally block')
  }
}

executeCode()