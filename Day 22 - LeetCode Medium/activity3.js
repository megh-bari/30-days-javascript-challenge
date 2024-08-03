// ! Container With Most of Water

function mostOfWater(height) {
  let highestWater = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const smallWater = Math.min(height[i], height[j]);
      const cureentWater = smallWater * (j - i);
      highestWater = Math.max(cureentWater, highestWater);
    }
  }
  return highestWater;
}

let a = [1, 5, 4, 3];
let b = [3, 1, 2, 4, 5];
let c = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(mostOfWater(a)); //* Output: 6
console.log(mostOfWater(b)); //* Output: 12
console.log(mostOfWater(c)); //* Output: 49
