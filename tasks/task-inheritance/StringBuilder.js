const Builder = require('./Builder')

class StringBuilder extends Builder {
  // eslint-disable-next-line no-useless-constructor
  constructor(value) {
    super(value)
  }

  static getCounter(length, param) {
    return Math.floor(length / param)
  }

  minus(n) {
    this.value = this.value.slice(0, -n)
    console.log(`Minus ${this.value}`)
    return this
  }

  multiply(n) {
    let resultSTR = this.value
    while (n - 1 > 0) {
      resultSTR += `${this.value}`
      n -= 1
    }
    this.value = resultSTR
    console.log(`Multiply ${this.value}`)
    return this
  }

  divide(n) {
    const k = StringBuilder.getCounter(this.value.length, n)
    this.value = this.value.slice(0, k)
    console.log(`Divide ${this.value}`)
    return this
  }

  remove(str) {
    if (this.value.includes(str)) {
      const substring = Array.from(str)
      this.value = Array.from(this.value).reduce((acc, item) => {
        if (item === substring[0]) {
          substring.slice(0, 1)
        } else {
          acc += item
        }
        return acc
      }, [])
      console.log(`Remove ${this.value}`)
      return this
    }
  }

  sub(from, n) {
    this.value = this.value.substring(from, from + n)
    console.log(`Sub ${this.value}`)
    return this
  }
}

module.exports = StringBuilder
