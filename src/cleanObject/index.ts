/**
 *
 * @param obj { id: 'id', name: 'name', age: 20, gender: undefined }
 * @returns { id: 'id', name: 'name', age: 20 }
 */
export function cleanObject<T, S extends T>(
  obj: Dictionary<T> = {},
): Dictionary<S> {
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined)
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {})
}
