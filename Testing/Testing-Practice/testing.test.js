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

test('Ceaser Cipher: abc = bcd with key value 1', () => {
  expect(testModule.ceaserCipher('abc', 1)).toBe('bcd');
});

test('Ceaser Cipher: Hello World = Ifmmp Xpsme with key value 2', () => {
  expect(testModule.ceaserCipher('Hello World', 2)).toBe('Jgnnq Yqtnf');
});

test('Ceaser Cipher: Hello World = Gdkkn Vnqkc with key value -1', () => {
  expect(testModule.ceaserCipher('Hello World', -1)).toBe('Gdkkn Vnqkc');
});

test('Ceaser Cipher: ZzZz = AaAa with key value 1', () => {
  expect(testModule.ceaserCipher('ZzZz', 1)).toBe('AaAa');
});

test('Ceaser Cipher: AaAa = ZzZz with key value -1', () => {
  expect(testModule.ceaserCipher('AaAa', -1)).toBe('ZzZz');
});

test('Ceaser Cipher: Hello, World! = Jgnnq, Yqtnf! with key value 2', () => {
  expect(testModule.ceaserCipher('Hello, World!', 2)).toBe('Jgnnq, Yqtnf!');
});

test('Ceaser Cipher: Man United 1 - Man City 3 = Ocp Wpkvgf 3 - Ocp Ekvb 5 with key value 2', () => {
  expect(testModule.ceaserCipher('Man United 1 - Man City 3', 2)).toBe('Ocp Wpkvgf 3 - Ocp Ekvb 5');
});