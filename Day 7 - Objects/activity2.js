// ! Activity 2: Objects Methods

// * Task 3

let book = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  getBookInfo: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book.getBookInfo());

// * Task 4

let books = {
  title: "Harry Potter and the Cursed Child",
  author: "J.K Rowling",
  year: 2016,
  getBookInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  updatedYear: function (year) {
    this.year = year;
  },
};

console.log(books.getBookInfo());
console.log(books.year);

books.updatedYear(2021)
console.log(`Updated Year ${books.year}`)

