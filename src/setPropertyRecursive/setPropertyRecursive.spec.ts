import { setPropertyRecursive } from './setPropertyRecursive';

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
