import { reduceSeries } from '.'

it('reduceSeries', async () => {
  /**
   * Given
   */
  const reduceFn = (prev: number, curr: number): Promise<number> => {
    return new Promise((resolve) => resolve(prev + curr))
  }
  const arr = Array.from({ length: 10 }).map(() => 1)
  const initialVal = 0
  /**
   * When
   */
  const result = await reduceSeries(arr, reduceFn, initialVal)
  /**
   * Then
   */
  expect(result).toBe(10)
})
