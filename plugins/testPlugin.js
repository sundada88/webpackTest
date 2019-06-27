class TestPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.plugin('emit', (compilation, cb) => {
      console.log(this.options)
      cb()
    })
  }
}
module.exports = TestPlugin