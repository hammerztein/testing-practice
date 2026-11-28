const ceasarCipher = (string, key) => {
	const lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
	const userInput = string.split('');

	const result = userInput
		.map((letter) => {
			const isUpperCase = letter === letter.toUpperCase();
			const normalizedLetter = letter.toLowerCase();
			if (!lowercase.includes(normalizedLetter)) {
				return letter;
			} else {
				const indexOfLetter =
					(lowercase.indexOf(normalizedLetter) + key) % lowercase.length;
				const ciperedLetter = lowercase[indexOfLetter];
				return isUpperCase ? ciperedLetter.toUpperCase() : ciperedLetter;
			}
		})
		.join('');

	return result;
};

export default ceasarCipher;
