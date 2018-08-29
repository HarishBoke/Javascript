//https://coderbyte.com/algorithm/linked-list-middle-element
//static link list

function Node(data, next)
{
    this.data = data;
    this.next = next;
}

var n1 = new Node("A", null);
var n2 = new Node("B", n1);
var n3 = new Node("C", n2);
var n4 = new Node("D", n3);
var n5 = new Node("E", n4);
var n6 = new Node("F", n5);

var head =  n6;


var fastPointer = head;
var slowPointer = head;


while(fastPointer.next !== null && fastPointer.next.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
}

console.log(slowPointer.data);