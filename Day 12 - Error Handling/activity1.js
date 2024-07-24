// ! Activity 1: Basic Error Handling With Try-Catch

// * Task 1

function throwError(user) {
  try {
    if (!user) {
      throw new Error("User name is missing");
    }
    if (!user.age || user.age < 18) {
      throw new Error("User must be at least 18 years old");
    }
    console.log("User data processed successfully");
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

const user1 = {
  name: "Megh",
  age: 25,
};
// throwError(user1);

const user2 = {
  name: "Nobody",
  age: 0,
};
throwError(user2)

// * Task 2

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
};

try {
  const result = divide(5, 0);
  console.log("result:", result);
} catch (error) {
  console.error("Error:", error.message);
}
