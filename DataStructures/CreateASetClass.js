// In the next few exercises we are going to create a function to 
// emulate a data structure called a "Set".
// A Set is like an array, but it cannot contain duplicate values.
// The typical use for a Set is to simply check for the presence
// of an item.
// This can be implemented with an object, for instance:

// Part 1: https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-set-class
// Instructions: Add to the set if the collection doesn't contain the item
// return true if added, false if not.

// Part 2: https://learn.freecodecamp.org/coding-interview-prep/data-structures/remove-from-a-set
// Instructions: Remove item from the set, true if removed, false if not removed.

// Part 3: https://learn.freecodecamp.org/coding-interview-prep/data-structures/size-of-the-set
// Instructions: this.size should return the size of the collection.

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
  //Part 1: change code below this line
  this.add = element => {
    if (collection.includes(element)) {
      return false;
    } else {
      collection.push(element);
      return true;
    }
  }
  // change code above this line
  //Part 2: change code below this line
  this.remove = element => {
    let index = collection.indexOf(element);
    if (index === -1) {
        return false;
    } else {
        collection.splice(index, 1);
        return true;
    }
  }
  // change code above this line
  //Part 3: change code below this line
  this.size = () => {
    return collection.length;
  }
  // change code above this line
}