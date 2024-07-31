// ! Activity 3: Grouping and Capturing

// * Task 5

const phoneNumber = "(123) 456-7890";

const regexp = /\((\d{3})\) (\d{3})-(\d{4})/;

const match = phoneNumber.match(regexp);

if (match) {

    console.log(`Area Code: ${match[1]}`);               
    console.log(`Central Office Code: ${match[2]}`);     
    console.log(`Line Number: ${match[0]}`);         
}

// * Task 6

const email = "meghbari01@gmail.com"

const exp = /(\w+).(\w+)/

const data = email.match(exp)

console.log(`User Name: ${data[1]}`)
console.log(`Domain Name: ${data[2]}`)

