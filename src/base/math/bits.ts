/**
 * 获取数字第几位bit的值
 * @param num 数字
 * @param pos 位置(1 ~ 30)
 * @returns 1 | 0
 */
export function getBit(num: number, pos: number): 1 | 0 {
  if (pos < 0 || pos > 30) {
    return 0
  }
  return num & (1 << pos) ? 1 : 0
}

/**
 * 获取数字最后一个bit位位置
 * @param num 数字
 * @returns 最后一个bit位位置
 */
export function getLastBitPos(num: number): number {
  let pos = 0
  while (num) {
    num >>= 1
    pos++
  }
  return pos
}
