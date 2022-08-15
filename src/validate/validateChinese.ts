/**
 * Element Plus Form 只能输入中文
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateChinese = (rule, value, callback) => {
  /^[\u4e00-\u9fa5]+$/.test(value) ? callback() : callback(new Error('只能输入汉字'))
}

export default validateChinese