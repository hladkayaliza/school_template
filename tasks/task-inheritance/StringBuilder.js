const Builder = require('./Builder')

class StringBuilder extends Builder {
  minus(n) {
    this.value = this.value.slice(0, -n)
    return this
  }

  multiply(n) {
    let resultSTR = this.value
    let counter = n
    while (counter - 1 > 0) {
      resultSTR += `${this.value}`
      counter -= 1
    }
    this.value = resultSTR
    return this
  }

  divide(n) {
    const k = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, k)
    return this
  }

  remove(str) {
    if (this.value.includes(str)) {
      const substring = Array.from(str)
      this.value = Array.from(this.value).reduce((acc, item) => {
        let currAcc = acc
        if (item === substring[0]) {
          substring.slice(0, 1)
        } else {
          currAcc += item
        }
        return currAcc
      }, [])
    }
    return this
  }

  sub(from, n) {
    this.value = this.value.substring(from, from + n)
    return this
  }
}

module.exports = StringBuilder
