// ! Activity 2: Practical Closure

// * Task 3

function UserIDs() {
  let lastID = 0;

  function generateID() {
    lastID += 1;
    return lastID.toString().padStart(4, "0");
  }

  function getID() {
    return lastID.toString().padStart(4, "0");
  }
  return { generateID, getID };
}

const myID = UserIDs();

console.log(myID.getID());
console.log(myID.generateID());
console.log(myID.getID());
console.log(myID.generateID());
console.log(myID.getID());

// * Task 4

function username(user) {
  let name = user;
  function greet() {
    return `Hello ${name}, Welcome to JS challenge`;
  }
  return greet;
}

const greetUser = username("Megh");

console.log(greetUser());
