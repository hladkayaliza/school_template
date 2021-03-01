function Builder(value) {
  this.value = value
}
Builder.prototype.plus = function (...n) {
  n.forEach((item) => {
    this.value += item
  })
  return this
}

Builder.prototype.get = function () {
  return this.value
}

module.exports = Builder
