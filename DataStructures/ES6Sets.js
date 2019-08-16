// https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-and-add-to-sets-in-es6
// Now using ES6 built-in Set data structure.

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line
  set = new Set([1, 2, 3, 'Taco', 'Cat', 'Awesome'])
  // change code above this line
  console.log(set);
  return set;
}

checkSet();