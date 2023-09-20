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

/**
 * 计算两个数的最大公约数
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 最大公约数
 */
export function gcd(a: number, b: number) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}
