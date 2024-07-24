// ! Activity 4: Error Handling in Promises

// * Task 6

const randomPromise = new Promise((resolve, reject) => {
  const outcome = Math.random() > 0.5;
  setTimeout(() => {
    if (outcome) {
      resolve("The promise was resolved!");
    } else {
      reject("The promise was rejected!");
    }
  }, 1000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// * Task 7

function randomPromises() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Failure!!"));
      }
    }, 1000);
  });
}
async function handlePromise() {
  try {
    const result = await randomPromises();
    console.log(result);
  } catch (error) {
    console.error("Error Caught:", error.message);
  }
}

handlePromise();
