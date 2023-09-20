/**
 * 将一个数组分割成最大容量固定的数组
 * 如果size <= 0 返回空数组
 * [1,2,3,4,5] 2 => [[1, 2], [3, 4], [5]]
 * @param arr 数组
 * @param size 每个分组的大小,小数会向下取整
 * @returns 分割后的数组
 */
export function chunk<T>(arr: T[], size = 1): T[][] {
  size = Math.max(Math.floor(size), 0)
  if (size <= 0) return [];
  const res = []
  const page = arr.length / size
  for (let index = 0; index < page; index ++) {
    res.push(arr.slice(index * size, index * size + size))
  }
  return res
}
