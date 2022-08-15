/**
 * 对象数组去重
 * @param {*} [arr=[]]
 * @param {string} [uniId='id']
 * @return {*} 
 */
const arrayUnique = (arr = [], uniId = 'id') => {
  const res = new Map()
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1))
}

export default arrayUnique