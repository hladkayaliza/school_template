class Node {
  constructor(data) {
    this.data = data
    this.previous = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  traverse(order = true) {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode)
      currentNode = currentNode.next
    }
    if (order) {
      return array
    }
    return array.reverse()
  }

  add(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
    return this
  }

  getNode(value) {
    const targetNode = new Node(value)
    if (!this.head) {
      return null
    }
    let currentNode = this.head
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        alert('Node is not exist in list')
        return null
      }
      currentNode = currentNode.next
    }
    return currentNode
  }

  addAfter(value, parentNode) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }
    let currentNode = this.head
    while (currentNode.data !== parentNode.data) {
      if (!currentNode.next) {
        alert('Target node is not exist in list')
        return null
      }
      currentNode = currentNode.next
    }
    newNode.previous = currentNode
    newNode.next = currentNode.next
    currentNode.next.previous = newNode
    currentNode.next = newNode
    return this
  }

  delete(value) {
    if (!this.head) {
      alert('List is empty')
      return null
    }
    const targetNode = new Node(value)
    let currentNode = this.head
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        alert('Target node is not exist in list')
      }
      currentNode = currentNode.next
    }
    const prevNode = currentNode.previous
    const nextNode = currentNode.next
    prevNode.next = nextNode
    nextNode.previous = prevNode
    return this
  }

  isExist(value) {
    if (!this.head) {
      alert('List is empty')
    }
    const targetNode = new Node(value)
    let currentNode = this.head
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        return false
      }
      currentNode = currentNode.next
    }
    return true
  }
}

const dll = new DoubleLinkedList()

dll.getHead()
dll.getTail()
dll.add('two').add('one').add('three').add('four')
dll.traverse() // two -> one -> three -> four
dll.traverse(true) // two -> one -> three -> four
dll.traverse(false) // four -> three -> one -> two

const parentNode = dll.getNode('one')
dll.addAfter('ten', parentNode)
dll.traverse() // two -> one -> ten -> three -> four
dll.delete('one').delete('three')
dll.traverse() // two -> ten -> four
dll.isExist('ten') // true
dll.isExist('one') // false

