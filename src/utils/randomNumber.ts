/**
 * 生成随机len位数字
 * @param {*} length
 * @param {*} date
 * @return {*} number
 */
const randomNumber = (length, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, typeof length === 'number' ? length : 4)
  if (date) random = random + Date.now()
  return +random
}

export default randomNumber