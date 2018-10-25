class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
  }

}
/* undefined
var a = new Node(110);
undefined
a;
Node {data: 110, next: null}
var c =new LinkedList();
undefined
c;
LinkedList {head: null}
c.head=a;
Node {data: 110, next: null}
c;
LinkedList {head: Node}head: Nodedata: 110next: null__proto__: Object__proto__: Object
c.getFirst();
Node {data: 110, next: null}data: 110next: null__proto__: Object
var gg=c.getFirst();
undefined
gg;
Node {data: 110, next: null}
c.head=a;
Node {data: 110, next: null}data: 110next: null__proto__: Object
c.next;
undefined
c.head;
Node {data: 110, next: null}
c;
LinkedList {head: Node}
var as = c.head;
undefined
as;
Node {data: 110, next: null}
as.next;
null */