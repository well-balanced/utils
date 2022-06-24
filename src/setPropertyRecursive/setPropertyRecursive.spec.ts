import { setPropertyRecursive } from './setPropertyRecursive';

/**
 * @example
 * setPropertyRecursive([key1, key2, key3], 'hello world', { hello: 'world' })
 * => { key1: {key2: {key3: 'hello world'} }, hello: 'world' }
 */

test('setPropertyRecursive', () => {
  /**
   * Given
   */
  const keys = ['first', 'second', 'third'];
  const value = 'setPropertyRecursive';
  const obj = { hello: 'world' };

  /**
   * When
   */
  const newObj = setPropertyRecursive(keys, value, obj);

  /**
   * Then
   */
  expect(newObj.first.second.third).toBe('setPropertyRecursive');
});
