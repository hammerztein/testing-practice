const ceasarCipher = (string, key) => {
	const lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
	const upperCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
	const userInput = string.split('');

	const result = userInput
		.map((letter) => {
			if (lowercase.includes(letter)) {
				const indexOfLetter =
					(lowercase.indexOf(letter) + key) % lowercase.length;
				return lowercase[indexOfLetter];
			} else {
				const indexOfLetter =
					(upperCase.indexOf(letter) + key) % upperCase.length;
				return upperCase[indexOfLetter];
			}
		})
		.join('');
	return result;
};

export default ceasarCipher;
