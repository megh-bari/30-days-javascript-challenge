// ! 3Sum

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          //* Skip duplicates for the second and third elements
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
  }
  
  console.log(threeSum([-1, 0, 1, 2, -1, -4])); //* Output: [ [-1, -1, 2], [-1, 0, 1] ]
  console.log(threeSum([0, 0, 0, 0])); //* Output: [ [0, 0, 0] ]
  console.log(threeSum([1, 2, -2, -1])); //* Output: [ ]
  console.log(threeSum([])); //* Output: [ ]