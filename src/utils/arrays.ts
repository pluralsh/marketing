/**
 * Returns the first element from the array or the element itself if it's not an array.
 * @param array The element or array to get the first element from.
 * @returns The first element from the array or the element itself.
 */
export function getFirstElementFromMaybeArray<T>(array: T | T[]): T {
  return Array.isArray(array) ? array[0] : array
}
