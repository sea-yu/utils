/**
 * 限制一个值在一个范围内
 * @param floor 下限
 * @param celi 上限
 * @param value 值
 * @returns 值
 */
export function boundLimit(floor: number, celi: number, value: number): number {
  if (value < floor) return floor
  if (value > celi) return celi
  return value
}
