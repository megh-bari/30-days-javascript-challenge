// ! the this keyword

// * Task 7

const myBook = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    bookDetails: function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }
}

console.log(myBook.bookDetails())