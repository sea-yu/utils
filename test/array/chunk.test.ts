import { describe, it, expect } from "vitest";
import { chunk } from '@/base'

describe('chunk', () => {
  it('chunk normal test', () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toStrictEqual([[1], [2], [3], [4], [5]])
    expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([[1, 2], [3, 4], [5, 6]])
    expect(chunk([1, 2, 3, 4, 5], 10)).toStrictEqual([[1, 2, 3, 4, 5]])
  })

  it('size not positive integer', () => {
    expect(chunk([1, 2], -1)).toStrictEqual([])
    expect(chunk([1, 2], 0)).toStrictEqual([])
    expect(chunk([1, 2], 0.2)).toStrictEqual([])
    expect(chunk([1, 2], 1.2)).toStrictEqual([[1], [2]])
    expect(chunk([1, 2, 3, 4, 5], 2.3)).toStrictEqual([[1, 2], [3, 4], [5]])
  })
})
