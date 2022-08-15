/**
 * Element Plus Form 校验银行卡号位数（不能小于10位数）
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateBankCard = (rule, value, callback) => {
  if (value.length < 10) {
    callback(new Error('银行卡格式不正确'))
  } else {
    callback()
  }
}

export default validateBankCard