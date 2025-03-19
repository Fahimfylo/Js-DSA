// Ques 1: Implement Linear Search in JavaScript

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1

const linearSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        return i;
      }
    }
    return -1;
  };
  
  // Time Complexity  - O(n)
  // Space Complexity - O(1)

  // Global Linear Search  
  const globalLinearSearch = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        result.push(i);
      }
    }
    if (result.length === 0) return -1;
    return result;
  };
  
  // Time Complexity  - O(n)
  // Space Complexity - O(n)
  console.log(globalLinearSearch([4, 5, 0, 7, 0, 1, 2], 0));