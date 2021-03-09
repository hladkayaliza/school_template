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

  head() {
    return this.head
  }

  tail() {
    return this.tail
  }

  traverse(order = true) {
    const array = []
    if (order) {
      let currentNode = this.head()
      while (currentNode !== null) {
        array.push(currentNode())
        currentNode = currentNode.next
      }
      return array
    } else {
      let currentNode = this.tail()
      while (currentNode !== null) {
        array.push(currentNode)
        currentNode = currentNode.previous
      }
      return array
    }
  }

  add(value) {
    const node = new Node(value)
    if (!this.head()) {
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
    if (!this.head()) {
      return null
    }
    let currentNode = this.head()
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        alert('Node is not exist in list')
        return null
      }
      currentNode.previous = currentNode
      currentNode = currentNode.next
    }
    return currentNode
  }

  addAfter(value, parentNode) {
    const newNode = new Node(value)
    if (!this.head()) {
      this.head = newNode
      return this
    } else {
      let currentNode = this.head()
      while (currentNode.data !== parentNode.data) {
        if (!currentNode.next) {
          alert('Target node is not exist in list')
          return null
        }
        currentNode = currentNode.next
        currentNode.previous = currentNode
      }
      currentNode.next = newNode
      newNode.previous = currentNode
      newNode.next = currentNode.next
      return this
    }
  }

  delete(value) {
    if (!this.head()) {
      alert('List is empty')
      return null
    }
    const targetNode = new Node(value)
    let currentNode = this.head()
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        alert('Target node is not exist in list')
      }
      currentNode.previous = currentNode
      currentNode = currentNode.next
    }
    const prevNode = currentNode.previous
    const nextNode = currentNode.next
    prevNode.next = nextNode
    nextNode.previous = prevNode
    return this
  }

  isExist(value) {
    if (!this.head()) {
      alert('List is empty')
    }
    const targetNode = new Node(value)
    let currentNode = this.head()
    while (currentNode.data !== targetNode.data) {
      if (!currentNode.next) {
        alert('Target node is not exist in list')
        return false
      } else {
        currentNode.previous = currentNode
        currentNode = currentNode.next
      }
    }
    return true
  }
}

const dll = new DoubleLinkedList();

dll.add('two').add('one').add('three').add('four');
dll.traverse() // two -> one -> three -> four
dll.traverse(true) // two -> one -> three -> four
dll.traverse(false) // four -> three -> one -> two

dll.head() // Node with value === 'two'
dll.tail() // Node with value === 'four'

const parentNode = dll.getNode('one')
dll.addAfter('ten', parentNode)
dll.traverse() // two -> one -> ten -> three -> four

dll.delete('one').delete('three');
dll.traverse() // two -> ten -> four

dll.isExist('ten') // true
dll.isExist('one') // false
