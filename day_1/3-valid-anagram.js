// Ques 3 - Valid Anagram
// An Anagram is a word or phase formated rearranging the letters of
// a different word or phase , using all the original letters exactly once

// Input: (s = 'anagram'), (t = 'nagaram') ----> Output: true
// Input: (s = 'rat'), (t = 'car') -----> Output: true

// 1st Approach
const isAnagram1 = function (i, j) {
  i = i.split("").sort().join("");
  j = j.split("").sort().join("");

  return i === j;
};

// cinema => [c,i,n,e,m,a] => [a, c, e, i, m, n] => cinema
// iceman => [i,c,e,m,a,n] => [a, c, e, i, m, n] => iceman

// 2nd Arrrocah
const isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  let Obj1 = {};
  let Obj2 = {};

  for (let i = 0; i < s.length; i++) {
    Obj1[s[i]] = (Obj1[s[i]] || 0) + 1;
    Obj2[t[i]] = (Obj2[t[i]] || 0) + 1;
  }

  for (const key in Obj1) {
    if (Obj1[key] !== Obj2[key]) return false;
  }
  return true;
};
