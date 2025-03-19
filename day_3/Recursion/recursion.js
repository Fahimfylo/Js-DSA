function john() {
    return jimmy();
  }
  
  function jimmy() {
    return saptu();
  }
  
  function saptu() {
    return tom();
  }
  
  function tom() {
    return kim();
  }
  
  function kim() {
    // base case
    return true;
  }
  
  // console.log(john());
  
  function goToLunch(person) {
    if (person === 5) return true;
    console.log(person);
    return goToLunch(person + 1);
  }
  
// console.log("outcome:", goToLunch(1));
  
  function multiply(arr) {
    console.log(arr);
    if (arr.length <= 0) {
      return 1;
    } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
  }
  
console.log(multiply([1, 2, 3, 4]));