import ceasarCipher from '../modules/caesarCipher.js';

test('to be a function', () => {
	expect(typeof ceasarCipher).toBe('function');
});

test('to return a string', () => {
	expect(typeof ceasarCipher('text')).toBe('string');
});

test('"abc" of key 3 should return "def"', () => {
	expect(ceasarCipher('abc', 3)).toBe('def');
});

