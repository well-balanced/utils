export function setPropertyRecursive<T>(
  [key, ...rest]: string[],
  value: any,
  obj = {} as T,
): T & Record<string, any> {
  return rest.length
    ? { ...obj, [key]: setPropertyRecursive(rest, value, obj[key]) }
    : { ...obj, [key]: value };
}
