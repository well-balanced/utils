import { createHash } from 'crypto'

export function hashIndex(seed: string, length: number): number {
  const hash = createHash('sha256').update(seed)
  const hashedKey = parseInt(hash.digest('hex'), 16)
  return hashedKey % length
}
