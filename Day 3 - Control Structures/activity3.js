// ! Activity 3: Switch Case

//* Task 4

let dayNumber = 4;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thurday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;

  default:
    dayName = "Invalid Day"
    break;
}

console.log(dayName);

//* Task 5

let percent = 72;
let grade;

switch (true) {
  case (percent >= 90 && percent <= 100):
    grade = "A";
    break;
  case (percent >= 80 && percent < 90):
    grade = "B";
    break;
  case (percent >= 70 && percent < 80):
    grade = "C";
    break;
  case (percent >= 60 && percent < 70):
    grade = "D";
    break;
  case (percent < 60 && percent >= 0):
    grade = "F";
    break;
  default:
    grade = "Invalid";
}

console.log(grade);
