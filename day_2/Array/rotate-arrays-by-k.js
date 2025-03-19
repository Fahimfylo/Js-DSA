// Ques 2 - Rotate Array by k

// Input : [1,2,3,4,5,6,7], k = 3 ----> Output: [5,6,7,1,2,3,4]
// Input : [-1,-100,3,99], k = 2 ----> Output: [3,99,-1,-100]

// Explanation:
// [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4,]

function rotateArr(arr, k) {
  let size = arr.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = arr.splice(size - k, size);

  arr.unshift(...rotated);
  return arr;
}
// Time Complexity -> O(n)

function rotateArrOptimized(arr, k) {
  let size = arr.length;
  if (size > k) {
    k = k % size;
  }
  reverse(arr, 0, arr.length - 1); //O(n)
  reverse(arr, 0, k - 1); // O(k)
  reverse(arr, k, arr.length - 1); // O(n-k)

  return arr;
}

// Time Complexity -> O(n)

function reverse(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

// console.log(rotateArrOptimized([1, 2, 3, 4, 5, 6, 7], 3));
