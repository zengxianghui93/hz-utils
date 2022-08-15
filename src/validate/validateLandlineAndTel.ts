/**
 * Element Plus Form 验证手机号+固定电话
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateLandlineAndTel = (rule, value, callback) => {
  var telReg = /^[1][3,4,5,7,8,9,6][0-9]{9}$/
  var landlineReg = /^((0\d{2,3})-)(\d{7,8})$/
  if (!telReg.test(value) && !landlineReg.test(value)) {
    callback(new Error('请输入正确的电话号'))
  } else {
    callback()
  }
}

export default validateLandlineAndTel