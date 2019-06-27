const console1 = /[^\.]console\.\w+.+\(.+\)/g
console.log(console1.test(`lalla
.console.log('这是一个测试' + "".concat(name, "yangyang")))`))
var str = '123-mm';
console.log(str.replace(/(\d+)-([A-Za-z]+)/g, '$1'))
const a = 'yangyang-sun'
console.log(a.replace(/(\w+)-(\w+)/g, '$1'))