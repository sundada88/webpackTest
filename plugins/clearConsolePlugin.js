class ClearConsolePlugin {
  constructor() {

  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('ClearConsolePlugin', (compilation, cb) => {
      Object.keys(compilation.assets).forEach(asset => {
        if (asset.endsWith('.js')) {
          let source = compilation.assets[asset].source()
          const reg = /([^\.]console\.\w+.+\(.+\))|(window.console\.\w+.+\(.+\))/g
          console.log(reg.test(source))
          source = source.replace(reg, '')
          compilation.assets[asset] = {
            source() {
              return source
            },
            size() {
              return source.length
            }
          }
          cb()
        }
      })
    })
  }
}
module.exports = ClearConsolePlugin