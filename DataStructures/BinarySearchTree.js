// Part 1: https://learn.freecodecamp.org/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree/
// Instructions: Write functions to find the min and max value
// of a binary search tree.

// Part 2: https://learn.freecodecamp.org/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree
// Instructions: Write a function to add an integer to the BST.
// return null if duplicate value, undefined if successful.

// Part 3: https://learn.freecodecamp.org/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree
// Instructions: Write a function to check if an element is present in the BST.
// return true if present, false if not.

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
     
    // Part 1: 
    // change code below this line
    // findMin should return the minimum value found in the BST
    this.findMin = () => {
        if (this.root === null) {
            return null;
        }
        let node = this.root;
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
    // findMax should return the maximum value found in the BST
    this.findMax = () => {
        if (this.root === null) {
            return null;
        }
        let node = this.root;
        while (node.right !== null) {
            node = node.right;
        }
        return node.value;
    }
    // change code above this line

    // Part 2: 
    // change code below this line
    // add should accept an integer, and add it to the tree.
    // if the value already exists return null, if successful return undefined.
    // this.add = (value) => {
    //     if (this.root === null) {
    //         this.root = new Node(value);
    //         return undefined;
    //     }
    //     let prevNode = this.root;
    //     let node = this.root;
    //     while (node !== null) {
    //         if (node.value === value) {
    //             return null;
    //         }
    //         prevNode = node;
    //         if (node.value > value) {
    //             node = node.left;
    //         } else if (node.value < value) {
    //             node = node.right;
    //         }
    //     }
    //     if (prevNode.value > value) {
    //         prevNode.left = new Node(value);
    //         return undefined;
    //     } else if (prevNode.value < value) {
    //         prevNode.right = new Node(value);
    //         return undefined;
    //     }
    // }

    // recursive
    this.add = (value) => {
      let addRecursive = (node, direction) => {
          if (node[direction] === null) {
              node[direction] = new Node(value);
              return undefined;
          } else if (node[direction].value === value) {
              return null;
          } else if (node[direction].value > value) {
              return addRecursive(node[direction], 'left');
          } else {
              return addRecursive(node[direction], 'right');
          }
      }
      return addRecursive(this, 'root');
  }
  // change code above this line

  // Part 3:
  // change code below this line
  // this.isPresent = (value) => {
  //     let node = this.root;
  //     while(node !== null) {
  //         if (node.value === value) {
  //             return true;
  //         } else if (node.value > value) {
  //             if (node.left === null) {
  //                 return false;
  //             } else {
  //                 node = node.left;
  //             }
  //         } else if (node.value < value) {
  //             if (node.right === null) {
  //                 return false;
  //             } else {
  //                 node = node.right;
  //             }
  //         }
  //     }
  //     return false;
  // }

  // using a recursive function
  this.isPresent = (value) => {
    const isPresentRecursive = (node, direction) => {
        if (node[direction] === null) {
            return false;
        } else if (node[direction].value === value) {
            return true;
        } else if (node[direction].value < value) {
            return isPresentRecursive(node[direction], 'right');
        } else if (node[direction].value > value) {
            return isPresentRecursive(node[direction], 'left');
        }
    }
    return isPresentRecursive(this, 'root');
  }
  // change code above this line
}