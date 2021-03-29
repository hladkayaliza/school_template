class Stack {
  constructor(maxLenght) {
    this.maxLenght = maxLenght
    this.state = []
  }

  push(value) {
    this.state.push(value)
  }

  pop() {
    this.state.pop()
  }

  isEmpty() {
    if (this.state?.length > 0) {
      return false
    }
    return true
  }

  peek() {
    return this.state[-this.state.length + 1]
  }

  isFull() {
    if (this.state?.length >= this.maxLenght) {
      return true
    }
    return false
  }
}

const stack1 = new Stack(5)

stack1.push(8)
stack1.push(3)
stack1.push(4)
stack1.push(9)
stack1.pop()
stack1.pop()
stack1.push(12)
stack1.push(16)
stack1.push(13)
stack1.push(22)

stack1.isEmpty()
stack1.isFull()
stack1.peek()
