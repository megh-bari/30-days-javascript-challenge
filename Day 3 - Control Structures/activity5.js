// ! Activity 5: Combining Conditions

// * Task 7

let year = 2024;
let leapYear;

if (year % 400 === 0) {
    leapYear = true;
} 
else if (year % 100 === 0) {
    leapYear = false;
} 
else if (year % 4 === 0) {
    leapYear = true;
}
 else {
    leapYear = false;
}

if (leapYear) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}
