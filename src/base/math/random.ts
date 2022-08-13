// 和一些随机相关的函数

/**
 * 生成随机数 [min, max]
 * @param min 最小值 default 0
 * @param max 最大值 default 100
 * @param precision 精度(0-20) default 0
 * @returns 随机数,如果最小值大于最大值返回0
 */
export function random(min = 0, max = 100, precision = 0):number {
  if (min > max) return 0
  const generateNumber = Math.random() * (max - min) + min
  return Number(generateNumber.toFixed(precision))
}

/**
 * 在一定为true的概率下随机Boolean
 * 比如在一定概率下是否中奖
 * @param probability 概率,默认0.5
 * @returns
 */
export function randomBoolean(probability = 0.5):boolean {
  if (probability >= 1) return true
  if (probability <= 0) return false
  return Math.random() <= probability
}
