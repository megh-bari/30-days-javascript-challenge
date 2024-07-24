// ! Activity 3: Custom Error Objects

// * Task 4

class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "CustomError";
    this.errorCode = errorCode;
  }
}

function customErr() {
  try {
    throw new CustomError("Something went wrong!", 1001);
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(`Custom Error: ${error.message} Code: ${error.errorCode}`);
    }
  }
}

customErr();

// * Task 5

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUserInput(input) {
  try {
    if (typeof input !== "string" || input.trim() === "") {
      throw new ValidationError("Input must be a non-empty string.");
    }
    console.log('Input is valid:', input);
  } catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation Error:', error.message);
      } else {
       
        console.error('Unexpected Error:', error.message);
      }
  }
}

validateUserInput('Megh') // ? valid input
validateUserInput('')
validateUserInput()
validateUserInput(1234)