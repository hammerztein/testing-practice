import analyzeArray from '../modules/analyzeArray.js';

test('to be a function', () => {
	expect(typeof analyzeArray).toBe('function');
});

test('to return an object', () => {
	expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

test('object to have "average", "min", "max" and "length" keys', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average');
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min');
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max');
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length');
});

test('object to have keys with actual values', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

