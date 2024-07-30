//! Activity 4: Array Algorithms

// * Task 8

function rotateArray(arr, k) {
    k = k % arr.length;
    const firstPart = arr.splice(arr.length - k, k);
    arr.unshift(...firstPart);
    return arr;
}
console.log(rotateArray(arr, 2));

// * Task 9

function sortArray(a, b) {
    let c = [];
    c.push(...a);
    c.push(...b);
    c.sort((a, b) => {
        a - b;
    });
    return c;
}
let a = [1, 3, 5, 7, 9];
let b = [2, 4, 6, 8, 10];
console.log(sortArray(a, b));