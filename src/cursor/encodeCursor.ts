/**
 *
 * @param cursor { name: 'name', age: 20 }
 * @returns eyJuYW1lIjoibmFtZSIsImFnZSI6MjB9 (base64 encoded)
 */
export function encodeCursor(obj: Dictionary<any> = {}): string {
  return Buffer.from(JSON.stringify(obj)).toString('base64')
}
