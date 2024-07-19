// ! Feature Request :

// * Book Object Script:

let books = {
  title: "Dune",
  author: "Frank Herbert",
  year: 1995,
  bookInfo: function () {
    return `${this.title} written by ${this.author} and published in ${this.year}`;
  },
  updatedYear: function (year) {
    this.year = year;
  },
};

console.log(books.bookInfo());

books.updatedYear(2002);

console.log(books.bookInfo());

// * Library Object Script:

const library = [
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1995,
    genre: ["Science Friction", "Adventure"],
  },
  {
    title: "The Time Machine",
    author: "H.G. Wells",
    year: 1895,
    genres: ["Science Friction", "Adventure"],
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genres: ["Dystopian", "Science Fiction"],
  },
];

library.forEach(books => {
    console.log(`Title: ${books.title}`)
    console.log(`Author: ${books.author}`)
    console.log(`Year: ${books.year}`)
    console.log(`Genres: ${books.genres}`)
});


// * Object Iteration Script:


let heros = {
    name: 'SpiderMan',
    power: 'Superhuman Strength, Speed, Durability',
    weakness: 'Love for Others'
}

for (const hero in heros) {
    console.log(`${hero}: ${heros[hero]}`)
}

console.log(`Keys: ${Object.keys(heros)}`)
console.log(`Values: ${Object.values(heros)}`)