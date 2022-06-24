import { encodeCursor, decodeCursor } from '.'

it('cursor', () => {
  /**
   * Given
   */
  interface User {
    name: string
    age: number
  }

  const user: User = { name: 'name', age: 20 }

  /**
   * When
   */
  const cursor = encodeCursor(user)
  const decoded = decodeCursor<User>(cursor)

  /**
   * Then
   */
  console.log(cursor)
  expect(typeof cursor).toBe('string')
  expect(decoded.age).toBe(20)
  expect(decoded.name).toBe('name')
})
