const calculator = {
	add: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Error('Both inputs should be numbers');
		}
		return a + b;
	},
	subtract: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Error('Both inputs should be numbers');
		}
		return a - b;
	},
	multiply: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Error('Both inputs should be numbers');
		}
		return a * b;
	},
	divide: (a, b) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Error('Both inputs should be numbers');
		}
		if (b === 0) {
			throw new Error('Can not divide by zero');
		}
		return a / b;
	},
};

export default calculator;
