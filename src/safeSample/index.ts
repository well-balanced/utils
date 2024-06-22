import { filterOut } from 'src/filterOut'
import { sample } from 'src/sample'

export function safeSample<T, U>(
  array: T[],
  valuesToExclude: U[],
  comparator: (a: T, b: U) => boolean,
) {
  const filtered = filterOut([...array], valuesToExclude, comparator)
  return filtered.length === 0 ? sample(array) : sample(filtered)
}
