// In the next few exercises we are going to create a function to 
// emulate a data structure called a "Set".
// A Set is like an array, but it cannot contain duplicate values.
// The typical use for a Set is to simply check for the presence
// of an item.
// This can be implemented with an object, for instance:

// Part 1: https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-set-class

// Instructions: create a function that will add a value
// to our set collection as long as the value does not
// already exist in the set. The function should return true if the value
// is successfully added and false otherwise.

function Set() {
  // the var collection will hold our set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
      return (collection.indexOf(element) !== -1);
  };
  // this method will return all the values in the set
  this.values = function() {
      return collection;
  };
  // change code below this line
  this.add = element => {
    if (collection.includes(element)) {
      return false;
    } else {
      collection.push(element);
      return true;
    }
  }
  // change code above this line
}