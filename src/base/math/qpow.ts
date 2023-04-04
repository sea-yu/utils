/**
 * 快速幂
 * @param base 基数
 * @param mod 幂数(整数)
 * @returns base^mod
 */
export function qpow(base: number, mod: number): number {
  let res = 1
  while (mod != 0) {
    if (mod & 1) {
      res *= base
    }
    mod >>= 1
    base *= base
  }
  return res
}
