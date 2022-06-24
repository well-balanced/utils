import { getFulfilledResult } from '.'

it('getFulfilledResult', async () => {
  /**
   * Given
   */
  const resolvePromise = new Promise((resolve) => resolve('fulfilled'))
  const rejectPromise = new Promise((_, reject) => reject('rejected'))

  /**
   * When
   */
  const result = getFulfilledResult(
    await Promise.allSettled([resolvePromise, rejectPromise]),
  )

  /**
   * Then
   */
  expect(result.length).toBe(1)
  expect(result[0]).toBe('fulfilled')
})
