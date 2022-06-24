export function encodeCursor(obj: Dictionary<any> = {}): string {
  return Buffer.from(JSON.stringify(obj)).toString('base64')
}
