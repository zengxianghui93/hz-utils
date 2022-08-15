/**
 * Element Plus Form 校验手机号码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateTel = (rule, value, callback) => {
  const reg = /^[1][3,4,5,7,8,9,6][0-9]{9}$/
  if (!reg.test(value)) {
    callback(new Error('请输入正确的电话号'))
  } else {
    callback()
  }
}

export default validateTel