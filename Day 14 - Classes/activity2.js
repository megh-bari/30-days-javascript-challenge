// ! Class Inheritance

// * Task 3

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name}.`;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  greeting() {
    return `Hello my name is ${this.name} and my Student ID: ${this.studentId}`;
  }
  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

const student = new Student("Megh", 18, "104");
console.log(student.getStudentId());

// * Task 4

console.log(student.greeting());
