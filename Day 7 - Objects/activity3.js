// ! Activity 3: Nested Objects

// * Task 5

let library = {
    'name': 'Science Library',
    books : [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            year : 1965
        },
        {
            title: 'The Time Machine',
            author: 'H.G. Wells',
            year : 1895
        },
        {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            year : 1932
        },
        {
            title: 'The Forever War',
            author: 'Joe Haldeman',
            year : 1974
        },
        {
            title: 'Snow Crash',
            author: 'Neal Stephenson',
            year : 1992
        },
    ]
}
// console.log(library)

// * Task 6

console.log(`Name: ${library.name}`)
library.books.forEach(allbooks => {
    console.log(`Title: ${allbooks.title}, Author: ${allbooks.author}, Year: ${allbooks.year}`)
});