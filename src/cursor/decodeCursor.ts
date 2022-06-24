export function decodeCursor<T>(cursor: string): T {
  return JSON.parse(Buffer.from(cursor, 'base64').toString('ascii'))
}
