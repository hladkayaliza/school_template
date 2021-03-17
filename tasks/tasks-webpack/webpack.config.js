const path  = require('path')
module.exports = {
  entry: path.resolve(_dirname, 'src/script.js'),
  output: {
    path: path.resolve(_dirname, 'dist'),
    filename: 'task-webpack.bundle.js'
  }
}
