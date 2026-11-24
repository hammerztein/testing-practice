import calculator from '../modules/calculator.js';

test('calculator should be an object', () => {
	expect(typeof calculator).toBe('object');
});

test('add should return sum of two numbers', () => {
	expect(calculator.add(2, 5)).toBe(7);
});

test('subtract should return subtraction of two numbers', () => {
	expect(calculator.subtract(4, -10)).toBe(14);
});

test('multiply should return multiplication of two numbers', () => {
	expect(calculator.multiply(6, 7)).toBe(42);
});

test('divide should return division of two numbers', () => {
	expect(calculator.divide(8, 5)).toBe(1.6);
});
