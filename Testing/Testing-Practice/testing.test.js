const testModule = require('./testing');

// Test 1: Capitalize first letter

test('Capitalize string', () => {
  expect(testModule.capitalize('HeLLo')).toBe('Hello');
});

// Test 2: Reverse string

test('Reverse string', () => {
  expect(testModule.reverse('mood')).toBe('doom');
});

// Test 3: Calculator

test('Addition: 2 + 2', () => {
  expect(testModule.calculator.add(2, 2)).toBe(4);
});

test('Subtraction: 2 - 2', () => {
  expect(testModule.calculator.subtract(2, 2)).toBe(0);
});

test('Division: 2 / 2', () => {
  expect(testModule.calculator.division(2, 2)).toBe(1);
});

test('Division: 2 / 0', () => {
  expect(testModule.calculator.division(2, 0)).toBe(Infinity);
});

test('Division: 0 / 2', () => {
  expect(testModule.calculator.division(0, 2)).toBe(0);
});

test('Multiplication: 2 * 2', () => {
  expect(testModule.calculator.multiply(2, 2)).toBe(4);
});

test('Multiplication: 2 * 0', () => {
  expect(testModule.calculator.multiply(2, 0)).toBe(0);
});


// Test 4: Ceaser Cipher