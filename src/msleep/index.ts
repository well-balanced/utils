export function msleep(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
