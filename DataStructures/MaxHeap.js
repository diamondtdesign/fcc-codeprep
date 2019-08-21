// https://learn.freecodecamp.org/coding-interview-prep/data-structures/insert-an-element-into-a-max-heap
// Instructions: create a max heap with an insert and print method.
// Note: Description of problem mentioned using null as the first child to ignore the index-1 for parent index.

var MaxHeap = function() {
  // change code below this line
  let heap = [];

  this.insert = (value) => {
    heap.push(value);
    let swapParentRecursive = (index) => {
      let parentIndex = Math.floor(((index - 1) / 2));
      if (heap[index] > heap[parentIndex]) {
        let val = heap[parentIndex];
        heap[parentIndex] = heap[index];
        heap[index] = val;
        swapParentRecursive(parentIndex);
      }
    }
    swapParentRecursive(heap.length-1);
  }

  this.print = () => {
    return heap;
  }
  // change code above this line
};