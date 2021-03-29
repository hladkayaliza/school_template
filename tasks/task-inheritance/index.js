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
getCounter
