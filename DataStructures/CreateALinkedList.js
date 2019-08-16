// https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-linked-list-class


function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  // Part 1: Add an element to the linked list.
  this.add = function(element){
    // Only change code below this line
    if (head === null) {
      head = new Node(element);
      length = 1;
    } else {
        let added = new Node(element);
        let node = head;
        while(node.next !== null) {
            node = node.next;
        }
        node.next = added;
        length += 1;
    }
    // Only change code above this line
  };
}


