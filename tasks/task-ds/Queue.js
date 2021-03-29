class Queue {
  constructor(maxLenght) {
    this.maxLenght = maxLenght
    this.state = []
  }

  enqueue(value) {
    this.state.push(value)
  }

  dequeue() {
    return this.state.unshift()
  }

  isEmpty() {
    if (this.state?.length > 0) {
      return false
    }
    return true
  }

  isFull() {
    if (this.state?.length >= this.maxLenght) {
      return true
    }
    return false
  }

  peek() {
    return this.state[this.state.length - 1]
  }
}

const queue1 = new Queue(3)
queue1.enqueue(2)
queue1.enqueue(7)
queue1.enqueue(0)
queue1.enqueue(9)
console.log(queue1.isFull())
queue1.dequeue()
console.log(queue1.isFull())
console.log(queue1.isEmpty())
console.log(queue1.peek())
