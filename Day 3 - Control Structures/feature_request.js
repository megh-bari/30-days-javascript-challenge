// ! Feature Request:

// * Q1 Number Check

let num = 10

if (num>0) {
    console.log(`${num} is Positve`)
} 
else if(num == 0){
    console.log(`${num} is Zero`)
}
else {
    console.log(`${num} is Negative`)
}

// * Q2 Voting Eligibility 

let age = 20

if (age>=18) {
    console.log("You are eligible for vota")
    
} else {
   console.log("You are not eligible for vote") 
}


// * Q3 Day of the week

let dayNumber = 1

switch (dayNumber) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log("Invalid Day")
        break;
}

// * Q4 Grade Assignment 

let marks = 80
let grade
switch (true) {
    case (marks>=90 && marks<=100):
        grade = "A - Grade"
        break;
    case (marks>=80 && marks<=90):
        grade = "B - Grade"
        break;
    case (marks>=70 && marks<=80):
        grade = "C - Grade"
        break;
    case (marks>=60 && marks<=70):
        grade = "D - Grade"
        break;
    case (marks<60):
        grade = "F - Grade"
        break;

    default:
        grade = "Invalid Marks"
        break;
}

console.log(grade)

// * Q5 Leap Year Check

let year = 2021
let leapYear

if (year%4==0) {
    if (year%100==0) {
        if (year%400 ==0) {
            leapYear = true
        }
        leapYear = false
    }
    leapYear = true
}
else{
    leapYear = false
}

if (leapYear) {
    console.log(`${year} is Leap Year`)
}
else{
    console.log(`${year} is not Leap Year`)
}
