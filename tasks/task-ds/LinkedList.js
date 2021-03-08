class Node {
  constructor(data) {
    this.next = null
    this.data = data
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
  }

  delete(nodeForDelete) {
    if (this.head === null) {
      alert('Linked list is empty')
    }
    let previousNode = this.head
    let currentNode = this.head.next
    if (previousNode.data === nodeForDelete.data) {
      this.head = null
      return
    }
    while (currentNode.data !== nodeForDelete.data) {
      if (!currentNode.next) {
        alert('Node is not exist in list')
        return
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode.next
  }

  addAfter(afterNodeValue, data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
      return
    }
    let currentNode = this.head
    while (currentNode.data !== afterNodeValue) {
      currentNode = currentNode.next
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  isExist(targetNode) {
    if (this.head === null) {
      alert('Linked list is empty')
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

  traverse() {
    const arr = []
    let currentNode = this.head
    while (currentNode !== null) {
      arr.push(currentNode.data)
      currentNode = currentNode.next
    }
    return arr
  }
}

const list = new LinkedList()
list.add('Liza')
list.add('Katya')
list.add('Inna')

list.addAfter('Katya', 'Polina')

const nodeForDelete1 = new Node('Katya')
list.delete(nodeForDelete1)
const nodeForDelete2 = new Node('Rodion')
list.delete(nodeForDelete2)

const k = new Node('Katya')
const l = new Node('Liza')
console.log(list.isExist(k))
console.log(list.isExist(l))
console.log(list.traverse())
