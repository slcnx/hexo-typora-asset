'use strict'

const filter = function (data) {
  // 匹配markdown的图片表达式
  const regexp = /<img src="([^"]*?)" alt="([^"]*?)">/g
  const replacerFunction = function replacer(match, p1, p2, offset, string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
    // match 匹配的字符串
    // p1, p2, p3, ..., pn 后向引用对应的相应位置的替换后的字符串
    // offset 匹配结果 相对于替换前字符串的 相对索引起始位置。从0开始
    // string  替换前的字符串
    if (!p1.match(/^http(s)?:\/\//)) {
      // 如果是完整的协议起始，就不处理
      try {
        p1 = p1.match(/\/([^/]+$)/)
        p1 = p1[1]
        return `<img src="${p1}" alt="${p2}">`
      } catch (error) {
      }
    }
    return string
  }
  data.content = data.content.replace(regexp, replacerFunction)
  return data
}

module.exports = filter
