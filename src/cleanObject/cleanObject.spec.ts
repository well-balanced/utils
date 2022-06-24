import { cleanObject } from '.'

it('cleanObject', () => {
  /**
   * Given
   */
  const user = { id: 'id', name: 'name', age: 20, gender: undefined }

  /**
   * When
   */
  const cleaned = cleanObject(user)

  /**
   * Then
   */
  const hasGender = Object.keys(cleaned).includes('gender')
  expect(hasGender).toBe(false)
})
