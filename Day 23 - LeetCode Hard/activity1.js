// ! Median of Two Sorted Arrays

function findMedianSortedArray(num1, num2) {
    const mergedArray = [];
    let p1 = 0; //* Pointer for num1
    let p2 = 0; //* Pointer for num2
  
    while (p1 < num1.length && p2 < num2.length) {
      if (num1[p1] <= num2[p2]) {
        mergedArray.push(num1[p1]);
        p1++;
      } else {
        mergedArray.push(num2[p2]);
        p2++;
      }
    }
  
    while (p1 < num1.length) {
      mergedArray.push(num1[p1]);
      p1++;
    }
    while (p2 < num2.length) {
      mergedArray.push(num2[p2]);
      p2++;
    }
  
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
      return mergedArray[middle];
    }
  }
  
  const num1 = [1, 3];
  const num2 = [2, 4, 5];
  const median = findMedianSortedArray(num1, num2);
  console.log(median); //* Output: 3
  
  const n1 = [1,2,3]
  const n2 = [4,5,6]
  const findMedian = findMedianSortedArray(n1, n2)
  console.log(findMedian) //* Output: 3.5
