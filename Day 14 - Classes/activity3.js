// ! Activity 3: Static Methods and Properties

// * Task 5

class Person {
  constructor(name) {
    this.name = name;
  }

  static greet() {
    return `Namaste from the Person`;
  }
}

console.log(Person.greet());

// * Taks 6

class Student extends Person {
  static studentCount = 0;
  constructor(name, studentID) {
    super(name);
    this.studentID = studentID;

    Student.studentCount++;
  }

  getStudentId() {
    return `Student ID:${this.studentID}`;
  }
}

const student1 = new Student("Megh", 101);
const student2 = new Student("Meghh", 102);
const student3 = new Student("Meghhhh", 103);

console.log(Student.studentCount);
