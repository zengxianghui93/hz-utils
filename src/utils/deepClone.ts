/**
 * 深拷贝
 * @param obj 需要深拷贝的对象
 * @returns obj
 */
 const deepClone = (obj: Object) => {
  if (typeof obj !== "object" || typeof obj == null) {
    return obj;
  }

  const result: object = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};

export default deepClone;