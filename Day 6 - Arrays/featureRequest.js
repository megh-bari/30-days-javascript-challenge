// ! Feature Request

// * Array Manipulation Script:

const heros = ["Spiderman", "Ironman", "Batman", "Superman", "Thor", "Loki"];

heros.push("Homelander"); // * Adds "Homelander" to the end of the array
console.log(heros);

heros.pop(); // * Removes the last element ("Homelander") from the array
console.log(heros);

heros.shift(); // * Removes the first element ("Spiderman") from the array
console.log(heros);

heros.unshift("Captain America"); // * Adds "Captain America" to the beginning of the array
console.log(heros);

// * Array Transformation Script:

const numbers = [1, 2, 3, 4, 5];

const multiply = numbers.map(myFun); // * map

function myFun(num) {
  return num * 10;
}
console.log(`multiply by 10 : ${multiply}`);

const ages = [10, 35, 23, 18];

const result = ages.filter((checkadult) => checkadult >= 18); //* filter

console.log(`Check Adult : ${result}`);

const num = [1, 2, 3, 4];
const sum = num.reduce((acc, curr) => {
  //* reduce
  return acc + curr;
}, 0);

console.log(`Sum of all numbers: ${sum}`);

// * Array Iteration Script:

const newArr = [1, 2, 3, 4, 5];

for (let i = 0; i < newArr.length; i++) { //* for loop
  console.log(newArr[i]);
}

newArr.forEach(element => { //* for each
    console.log(element) 
});

// * Two-Dimensional Array Script:

let matrix = [
    [1,2,3],
    [3,2,1],
]

console.table(matrix) //* for better understanding

matrix.push([4,5,6])
console.table(matrix)