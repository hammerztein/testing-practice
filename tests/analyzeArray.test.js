import analyzeArray from '../modules/analyzeArray.js';

test('to be a function', () => {
	expect(typeof analyzeArray).toBe('function');
});

test('to return an object', () => {
	expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

