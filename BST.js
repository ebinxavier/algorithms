class BinaryNode {
  constructor(value) {
    this.value = value;
  }
  addChild(node) {
    if (!this.left) this.left = node;
    else if (!this.right) this.right = node;
    else return false; // Error, unable to add child
    return true; // Added child
  }
  removeChild(node) {
    if (this.left === node) this.left = undefined;
    else if (this.right === node) this.right = undefined;
  }
  getChildren() {
    return { left: this.left, right: this.right };
  }
}
let c = 0;

class BST {
  constructor() {
    this.root = null;
    this.depth=0;
  }
  add(number) {
    const node = new BinaryNode(number);
    node.level = 0;
    if (!this.root) this.root = node;
    else {
      let current = this.root;
      while (true) {
        node.level++;
        if(node.level > this.depth) this.depth=node.level; // keeps track max depth of tree
        let { left, right, value } = current;
        if (value > number) {
          if (!left) {
            current.left = node;
            break;
          } else {
            current = left;
          }
        } else {
          if (!right) {
            current.right = node;
            break;
          } else {
            current = right;
          }
        }
      }
    }
  }

  search(number) {
    let current = this.root;
    while (true) {
      if (!current) return false; // Not found
      if (current.value === number) {
        console.log(current); // Found
        return current;
      } else if (number < current.value) current = current.left;
      else current = current.right;
    }
  }
  print() {
    for(let i=0;i<=this.depth;i++){
      let prepend="";
      for(let j=0;j<i;j++){
        prepend+='-'
      }
      this.BFSLevel(i).forEach(item=>{
        console.log(prepend+item);
      })

    }
  }
  BFS() {
    let current = this.root;
    const q = [current];
    const res = [];
    while (q.length) {
      const item = q.shift();
      res.push(item.value);
      if (item.left) q.push(item.left);
      if (item.right) q.push(item.right);
    }
    console.log(res);
    return res;
  }
  BFSLevel(level) {
    // Prints a particular level of tree
    let current = this.root;
    const q = [current];
    const res = [];
    while (q.length) {
      const item = q.shift();
      if (level === item.level) res.push(item.value);
      if (item.left) q.push(item.left);
      if (item.right) q.push(item.right);
    }
    // console.log(res);
    return res;
  }
  DFS() {
    let current = this.root;
    const stack = [current];
    const res = [];
    while (stack.length) {
      const item = stack.pop();
      res.push(item.value);
      if (item.right) stack.push(item.right);
      if (item.left) stack.push(item.left);
    }
    console.log(res);
    return res;
  }
}

const tree = new BST();
const elements = [5, 6, 10, 7, 1, 3, 4, 2, 9];

/*
                  5          <- level 0
                 / \
                1   6        <- level 1
                 \    \
                 3     10    <- level 2
                / \    /
               2   4  7      <- level 3
                       \
                        9    <- level 4
*/
elements.forEach((e) => tree.add(e));
// tree.search(10);
// tree.BFS(); // => [ 5, 1, 6, 3, 10, 2, 4, 7, 9 ]
// tree.BFSLevel(4); // => [9]
// tree.DFS(); // => [ 5, 1, 3, 2, 4, 6, 10, 7, 9 ]
tree.print();
