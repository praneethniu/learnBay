class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  createNode = (val) => new Node(val)
  push = (val) => {
    if (!this.head) {
      this.head = this.createNode(val)
      return
    }
    let currNode = this.head
    while (currNode && currNode.next) currNode = currNode.next
    currNode.next = this.createNode(val)
  }

  pop = () => {
    let currNode = this.head
    if (!currNode) return

    if (!currNode.next) {
      this.head = null
      return
    }
    let prevNode = null
    while (currNode && currNode.next) {
      prevNode = currNode
      currNode = currNode.next
    }
    prevNode.next = null
  }

  empty = () => (this.head = null)

  size = () => {
    let currNode = this.head
    if (!currNode) return 0
    let count = 1
    while (currNode && currNode.next) {
      currNode = currNode.next
      count++
    }
    return count
  }

  top = () => {
    let currNode = this.head
    if (!currNode) return
    while (currNode && currNode.next) currNode = currNode.next
    return currNode.val
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(16)
console.log(stack.head)
console.log("SIZE ", stack.size())
console.log("TOP ", stack.top())

stack.pop()
stack.pop()
console.log(stack.head)
stack.empty()
console.log(stack.head)
