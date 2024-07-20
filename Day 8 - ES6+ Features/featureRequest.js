// ! Feature Request

// * Template Literals Script:

let name = "Megh";
let age = 18;
let hobby = "Writing (Alien Readable) Code";

let msg = `
    Namaste Duniya! My name is ${name}.
    I am ${age} years old.
    My hobby is ${hobby}.
    I enjoy coding and learning new technologies.
`;

console.log(msg);

// * Destructuring Script:

let first, second;
[first, second] = [10, 20, 30, 40, 50];

console.log(`First Number: ${first}`);
console.log(`Second Number: ${second}`);

let person = {
  firstName: "John",
  lastName: "Doe",
};

let { firstName, lastName } = person;
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);

// * Spread and Rest Operators Script:

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

console.log(`Combine Array : ${arr2}`);

function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(`Sum of 1,2,3,4,5 : ${sum(1, 2, 3, 4, 5)}`);

// * Default Parameter Script:

let product = (val1, val2 = 1) => {
  return val1 * val2;
};

console.log(product(5,2))
console.log(product(2))

// * Enhanced Object Literals Script:

let key1 = 'lang name'
let key2 = 'channle name'

let obj = {
    [key1]: 'Javascript',
    [key2]: 'Chai aur Code',
    details(){
        return `Learning ${this[key1]} with ${this[key2]}`
    }
}

console.log(`${obj.details()}`)