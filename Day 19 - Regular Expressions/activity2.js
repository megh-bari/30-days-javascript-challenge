// ! Activity 2: Character Classes and Quantifiers

// * Task 3

const regex = /\b[A-Z][a-z]*\b/g;

const text =
  "Wake up to reality. Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility";

const matchCaptialWords = text.match(regex);

console.log(matchCaptialWords);

// * Task 4

const regExp = /\d+/g;

const text1 = "My phone number is 123456 and my zip code is 78901.";


const digitSequences = text1.match(regExp);

console.log(digitSequences);