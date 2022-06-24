/**
 *
 * @param cursor eyJuYW1lIjoibmFtZSIsImFnZSI6MjB9 (base64 encoded)
 * @returns { name: 'name', age: 20 } (decoded object)
 */
export function decodeCursor<T>(cursor: string): T {
  return JSON.parse(Buffer.from(cursor, 'base64').toString('ascii'))
}
