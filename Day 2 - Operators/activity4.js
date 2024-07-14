// ! Activity 4: Logical Operators

//* Task 11

let userLoggedIn = true;
let hasAdminPrivileges = false;

if (userLoggedIn && hasAdminPrivileges) {
  console.log("Welcome, Admin! You have full access.");
} else {
  console.log("Access denied. Admin privileges are required.");
}

//* Task 12

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("It's time to relax!");
} else {
  console.log("Keep Working hard!");
}


//* Task 13

let isopen = false

if (!isopen) {
    console.log('The store is closed')
} else {
    console.log('The store is open')
}