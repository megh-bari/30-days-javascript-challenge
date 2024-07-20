// ! Activity 2: Destructuring

// * Task 3

let first, second
[first, second] = [10,20,30,40,50]

console.log(`First element: ${first}`)
console.log(`Second element: ${second}`)


// * Task 4

let book = {
    name : 'The Time Machine',
    author : 'H.G. Wells'
}

let {name, author} = book
console.log(`Book Name: ${name}`)
console.log(`Written By: ${author}`)