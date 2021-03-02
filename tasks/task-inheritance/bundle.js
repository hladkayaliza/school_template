(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Builder(value) {
  this.value = value
}
Builder.random = function (from, to) {
  const randomValue = Math.random() * (from - to) + to
  return Math.round(randomValue)
}

Builder.prototype.plus = function (...n) {
  n.forEach((item) => {
    this.value += item
  })
  console.log(`Plus ${this.value}`)
  return this
}

Builder.prototype.get = function () {
  console.log(`Get ${this.value}`)
  return this.value
}

module.exports = Builder

},{}],2:[function(require,module,exports){
const Builder = require('./Builder')

function IntBuilder(value) {
  Builder.call(this, value)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.random = function(from, to) {
  const randomValue = Math.random() * (from - to) + to
  return Math.round(randomValue)
}

IntBuilder.prototype.minus = function (...n) {
  n.forEach((item) => {
    this.value -= item
  })
  console.log(`Minus ${this.value}`)
  return this
}
IntBuilder.prototype.multiply = function (n) {
  this.value *= n
  console.log(`Multiply ${this.value}`)
  return this
}
IntBuilder.prototype.divide = function (n) {
  this.value /= n
  console.log(`Divide ${this.value} `)
  return this
}
IntBuilder.prototype.mod = function (n) {
  this.value %= n
  console.log(` Mod ${this.value} `)
  return this
}
module.exports = IntBuilder

},{"./Builder":1}],3:[function(require,module,exports){
const Builder = require('./Builder')

class StringBuilder extends Builder {
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
      n--
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

},{"./Builder":1}],4:[function(require,module,exports){
const IntBuilder = require('./IntBuilder')
const StringBuilder = require('./StringBuilder')

console.log(IntBuilder.random(10, 100))
const intBuilder = new IntBuilder(10)
intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get()

const strBuilder = new StringBuilder('Hello')
strBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1, 1)
  .get()

},{"./IntBuilder":2,"./StringBuilder":3}]},{},[4]);
