import capitalize from '../modules/capitalize.js';

test('to be a function', () => {
	expect(typeof capitalize).toBe('function');
});

test('to return a string', () => {
	expect(typeof capitalize('text')).toBe('string');
});

