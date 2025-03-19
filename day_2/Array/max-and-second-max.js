// Ques 1 - Second Largest Number

// Input : [12,35,1,10,34,1] ----> Output: 34
// Input : [10,5,10] ----> Output: 5

// Brute Force approach
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => {
    return b - a;
  });
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

// console.log(secondLargest([10, 5, 10, 11]));

function secondLargestOptimized(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestOptimized([10, 5, 10]));

// Time Complexity -> O(n)
// Space Complexity -> O(1)