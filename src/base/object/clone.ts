/**
 * 深拷贝
 * @param target 拷贝对象
 * @param map 防止循环拷贝
 * @returns 新的对象
 */
export function deepClone<T extends Array<T> | any> (target: T, map: Map<any, any> = new Map()) : T | T[] {
  if (typeof target !== 'object') {
    return target
  }
  if (map.has(target)) {
    return map.get(target)
  }
  if (Array.isArray(target)) {
    const res: T[] = []
    map.set(target, res)
    for (const item of target) {
      if (typeof item === 'object') {
        res.push(deepClone(item, map))
      } else{
        res.push(item)
      }
    }
    return res
  }
  const newObj = Object.create(null)
  map.set(target, newObj)
  Object.keys(target as Record<string, any>).forEach(key => {
    const t = (target as Record<string, any>)[key]
    if (typeof t === 'object') {
      newObj[key] = deepClone(t, map)
    } else{
      newObj[key] = t
    }
  })
  return newObj
}
