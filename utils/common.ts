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

export function now() {
  return (typeof performance === 'undefined' ? Date : performance).now()
}

export function boundLimit(floor: number, celi: number, value: number): number {
  if (value < floor) 
    return floor
  if (value > celi) 
    return celi
  return value
}
