const capitalize = require('./testing');

test('Capitalize string', () => {
  expect(capitalize('HeLLo')).toBe('Hello');
});