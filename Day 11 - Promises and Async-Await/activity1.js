// ! Activity 1: Understanding Promises

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});


const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
});


resolvePromise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.error(error);
});


rejectPromise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.error(error);
});


