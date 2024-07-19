// ! Activity 5: Object Iteration

// * Task 8

let book = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
};

for (const property in book) {
  console.log(`${property}: ${book[property]}`);
}

// * Task 9

console.log(`Keys: ${Object.keys(book)}`)
console.log(`Values: ${Object.values(book)}`)