// ! Group Anagrams

function groupAnagrams(str) {
  let result = {};
  const words = str.split(",").map((word) => word.trim());

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    
    if (result[sortedWord]) {
      result[sortedWord].push(word);
    } else {
      result[sortedWord] = [word];
    }
  }
  return Object.values(result);
}

let a = "eat, tea, tan, ate, nat, bat";
console.log(groupAnagrams(a)); //* [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
