// https://learn.freecodecamp.org/coding-interview-prep/data-structures/adjacency-list
// essentially a bulleted list where the left side is the node, and right side lists all other nodes its connected to.
// Directed graph would mean that the representation Node2: Node1 means Node2 is pointing to Node1,
// Where as in undirected, Node2: Node1 just shows they are connected.

// Instructions, create a undirected graph with James, Jill, Jenny, and Jeff
// where edges/relationships between:
// James and Jeff
// Jill and Jenny
// Jeff and Jenny

var undirectedAdjList = {
  James: ["Jeff"],
  Jill: ["Jenny"],
  Jenny: ["Jill", "Jeff"],
  Jeff: ["James", "Jenny"]
};