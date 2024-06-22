type Comparator<T, U> = (a: T, b: U) => boolean

export function filterOut<T, U>(
  array: T[],
  valuesToRemove: U[],
  comparator: Comparator<T, U>,
): T[] {
  return array.filter(
    (item) => !valuesToRemove.some((value) => comparator(item, value)),
  )
}
