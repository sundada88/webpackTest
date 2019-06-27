class CleanComments {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    // 需要匹配的正则表达式
    // const reg = /(\/(\*+)\/\s+)|(\/\/\s+.+)|(\/.+\\)|(\!\*.+\*\!)|(\/.+\/)|(\\\*+\/)/g
    const reg = /(\/\*.+?\*\/)|(\/\/\s+.+)|(\n\/\/(\w|\#).+)|((\s)+\/\/(\w|\#).+)|(\/\*.+\*\\)|(\!\*.+\*\!)|(\\\*+\/)|(\/\*\n(.+\n)+.*\*\/)|(\/\*\*\n(.+\n)+.+\*\/)/g
    compiler.hooks.emit.tap('CleanComments', (compilation) => {
      Object.keys(compilation.assets).forEach(item => {
        // 只匹配js文件
        if (item.endsWith('.js')) {
          let content = compilation.assets[item].source()
          // 替换
          content = content.replace(reg, '')
          compilation.assets[item] = {
            // 将替换后的内容写入新的文件中
            source() {
              return content
            },
            size() {
              return content.size
            }
          }
        }
      })
    })
  }
}
module.exports = CleanComments