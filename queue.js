class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  createNode = (val) => new Node(val)
  push = (val) => {
    if (!this.head) {
      this.head = this.createNode(val)
      return
    }
    let currNode = this.createNode(val)
    currNode.next = this.head
    this.head = currNode
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

  front = () => {
    let currNode = this.head
    if (!currNode) return
    while (currNode && currNode.next) currNode = currNode.next
    return currNode.val
  }
}

let queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(16)
console.log(queue.head)
console.log("SIZE ", queue.size())
console.log("TOP ", queue.front())

queue.pop()
queue.pop()
console.log(queue.head)
queue.empty()
console.log(queue.head)
