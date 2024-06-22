export function randomInt(min: number, max: number): number {
  max = max + 1
  return Math.floor(Math.random() * (max - min)) + min
}
