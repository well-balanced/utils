import { mapSeries } from '.'

it('mapSeries', async () => {
  /**
   * Given
   */
  const arr = Array.from({ length: 10 }).map(() => 1)
  const initialVal = 0
  /**
   * When
   */
  const result = await mapSeries(arr, async (item, idx) => idx * 2)
  /**
   * Then
   */
  expect(result[0]).toBe(0)
  expect(result.at(-1)).toBe(18)
})
