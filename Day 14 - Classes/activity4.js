// ! Activity 4: Getters and Setters

// * Task 7

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullName(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const myName = new Person("Megh", "Bari");
console.log(myName.fullName);

// * Task 8

myName.fullName = "Mr Nobody";
console.log(myName.fullName);
