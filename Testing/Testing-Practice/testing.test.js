const testModule = require('./testing');

// Test 1: Capitalize first letter

test('Capitalize string', () => {
  expect(testModule.capitalize('HeLLo')).toBe('Hello');
});

// Test 2: Reverse string

test('Reverse string', () => {
  expect(testModule.reverse('mood')).toBe('doom');
});

// Test 3: 