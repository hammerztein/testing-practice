const ceasarCipher = (string, key) => {
	const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
	const indexOfInputLetters = string
		.split('')
		.map((letter) => alphabet.indexOf(letter));
	const result = indexOfInputLetters
		.map((letterIndex) => {
			return alphabet[letterIndex + key];
		})
		.join('');
	return result;
};

export default ceasarCipher;

