// ! Trapping Rain Water

function trapRainWater(height) {
    if (height.length === 0) {
      return 0;
    }
  
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
  
    while (left <= right) {
      if (height[left] <= height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
  
    return waterTrapped;
  }

  const height = [2, 1, 0, 2, 2, 0, 2];
  console.log(trapRainWater(height)); //* Output: 5
  