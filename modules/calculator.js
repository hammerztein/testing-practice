const validateInput = (a, b) => {
	if (!Number(a) || !Number(b)) {
		throw new Error('Both inputs should be numbers');
	}
};

const calculator = {
	add: (a, b) => {
		validateInput(a, b);
		return a + b;
	},
	subtract: (a, b) => {
		validateInput(a, b);
		return a - b;
	},
	multiply: (a, b) => {
		validateInput(a, b);
		return a * b;
	},
	divide: (a, b) => {
		validateInput(a, b);
		if (b === 0) {
			throw new Error('Can not divide by zero');
		}
		return a / b;
	},
};

export default calculator;
