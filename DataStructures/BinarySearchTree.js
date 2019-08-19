// Part 1: https://learn.freecodecamp.org/coding-interview-prep/data-structures/find-the-minimum-and-maximum-value-in-a-binary-search-tree/
// Instructions: Write functions to find the min and max value
// of a binary search tree.


var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    
    // Part 1: change code below this line
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
}