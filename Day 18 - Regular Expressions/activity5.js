// ! Activity 5: Practical Applications

// * Task 9

const validation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).+$/;

const pass1 = "IwriteCode@01";
const pass2 = "hehehehe";

function validatePassword(password) {
  return validation.test(password);
}

if (validatePassword(pass1)) {
  console.log(`Password 1: ${pass1} - Valid Password`);
} else {
  console.log(`Password 1: ${pass1} - Invalid Password`);
}

if (validatePassword(pass2)) {
  console.log(`Password 2: ${pass2} - Valid Password`);
} else {
  console.log(`Password 2: ${pass2} - Invalid Password`);
}

// * Task 10

const validUrlExp =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]+\/?)*$/;

const url = "https://courses.chaicode.com/";

function isValidUrl(url) {
  return validUrlExp.test(url);
}

if (isValidUrl) {
  console.log(`URL: ${url} - Valid`);
} else {
  console.log(`URL: ${url} - Invalid`);
}
