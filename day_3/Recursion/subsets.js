// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function subsets(nums) {
    let result = [];
    let temp = [];
  
    function recursiveSubsets(nums, i) {
      if (i === nums.length) {
        return result.push([...temp]);
      }
  
      temp.push(nums[i]);
      recursiveSubsets(nums, i + 1);
      temp.pop();
      recursiveSubsets(nums, i + 1);
    }
  
    recursiveSubsets(nums, 0);
    return result;
  }
  
  console.log(subsets([1]));