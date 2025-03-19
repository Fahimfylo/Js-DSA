// Ques 3 - Remove Duplicates from sorted array

// Input : [1,1,2] ----> Output: 2, [1,2,_]
// Input : [0,0,1,1,1,2,2,3,3,4] ----> Output: 5, [0,1,2,3,4,_,_,_,_]

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

// console.log(removeDuplicates(removeDuplicatesOptimized));

// Without js method
function removeDuplicatesOptimized(nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesOptimized([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
