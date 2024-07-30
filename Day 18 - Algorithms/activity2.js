// ! Activity 2: Searching Algorithms

// * Task 4

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 11));


// * Task 5

function binarySearch(arr, start, end, target) {
    for (let i = 0; i < arr.length; i++) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 0, arr.length, 6));
console.log(binarySearch(arr, 0, arr.length, 12));

