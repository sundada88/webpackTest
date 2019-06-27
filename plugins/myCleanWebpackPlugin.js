const path = require('path')
const fs = require('fs')
class MyCleanWebpackPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    // 清除文件的异步函数，写成async函数
    async function removeFile(fileName) {
      await fs.unlinkSync(fileName)
    }
    compiler.hooks.emit.tapAsync('MyCleanWebpackPlugin', (compilation, cb) => {
      // 读取
      const dirItems = fs.readdirSync(this.options.path)
      const path = this.options.path + '\\'
      dirItems.forEach(item => {
        removeFile(path + item)
      })
      cb()
    })
  }
}
module.exports = MyCleanWebpackPlugin