// ---------- Array - Declaration ----------
// let arr = []

let person = {
  name: "John",
  age: 25,
};

let arr = ["apple", "banana", "orange", "mango", person];

// ---------- Array - Add & Remove Elements ----------

let arr2 = ["apple", "banana", "orange", "mango"];

// Add to end of the array
arr2.push("apple");

// Remove from the end of the array
arr2.pop();

// Add to the top of the array
arr2.unshift("orange");

// Remove from the top of the array
arr2.shift();

// console.log(arr2);

// ---------- Array - Looping an Array ----------
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

let i = 0;
while (i < arr2.length) {
  //   console.log(arr2[i]);
  i++;
}

// Inbuild Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map
numbers.map((item, index, array) => {
  return item + 5;
});

// filter
numbers.filter((item, index, array) => {
  // only conditional value will return
  return item < 5;
});

// reduce
numbers.reduce((prev, curr) => {
  return prev + curr;
}, 1);

// some (returns true/false)
numbers.some((item, index, array) => {
  return item < 5;
});

// every
numbers.every((item, index, array) => {
  return item < 10;
});

// find
numbers.find((item, index, array) => {
  return item > 4;
});

// ---------- Spread and Rest Opeerators ----------

const nums = [1, 2, 3];
const nums2 = [4, 5, 6];

const finalNums = [...nums, ...nums2];

function sum(...numbers) {
  return numbers;
}

// ---------- More Array method ----------

// concat
nums.concat(nums2, arr);

// slice
arr2.slice(-3);

// Splice
arr2.splice(1, 2, "strawberry");

// Fill
const newArr = nums.fill(0);

// findIndex
nums.findIndex((item) => item === 1);

// Flat
const numbers2 = [1, [2, 3], [[4], [5], [6]]];
const flatArr = numbers2.flat(2);

// Reverse
nums2.reverse();

// Sort
const unsorted = [5, 1, 4, 3, 2, 7, 9];
unsorted.sort();
console.log(unsorted);
