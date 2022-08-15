
import deepClone from "./deepClone"

/**
 * 对象属性复制（浅拷贝）leftAssign({a: '', b: '2'}, {a: 2, b: null, c: 3}) =>>> {a: 2, b: '2'}
 * @param obj1 
 * @param obj2 
 * @returns obj1
 */
const leftAssign = (obj1: Object, obj2: Object) => {
  const source = deepClone(obj1)
  Object.keys(source).forEach(key => {
    if (obj2[key] === 0) {
      source[key] = obj2[key]
    } else {
      source[key] = obj2[key] || source[key]
    }
  })
  return source
}

export default leftAssign