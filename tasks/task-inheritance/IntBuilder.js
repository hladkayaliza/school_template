const Builder = require('./Builder')

function IntBuilder(value) {
  Builder.call(this, value)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.random = function (from, to) {
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
