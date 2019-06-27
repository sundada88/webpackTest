module.exports = function (source) {
  let style = (`
  let style = document.createElement("style");
  style.innerText = ${JSON.stringify(source)};
  document.head.appendChild(style);
 `)
  return style
}