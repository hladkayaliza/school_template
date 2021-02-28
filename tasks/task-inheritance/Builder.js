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
