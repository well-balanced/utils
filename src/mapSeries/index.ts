export const mapSeries = async <T, U>(
  array: T[],
  iterator: (item: T, idx: number) => Promise<U>,
): Promise<U[]> => {
  const mapped: U[] = []
  for (let i = 0; i < array.length; ++i) {
    const item = array[i]
    const result = await iterator(item, i)
    mapped.push(result)
  }
  return mapped
}
