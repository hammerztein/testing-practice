import reverseString from '../modules/reverseString';

test('to be a function', () => {
	expect(typeof reverseString).toBe('function');
});

test('to return a string', () => {
	expect(typeof reverseString('text')).toBe('string');
});
