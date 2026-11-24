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
