const getAvearage = (array) => {
	return (
		array.reduce((sum, curr) => {
			return sum + curr;
		}) / array.length
	);
};

const getMinimumValue = (array) => {
	return array.sort()[0];
};

const getMaximumValue = (array) => {
	return array.sort()[array.length - 1];
};

const analyzeArray = (array) => {
	const analyzedObject = {
		average: getAvearage(array),
		min: getMinimumValue(array),
		max: getMaximumValue(array),
		length: array.length,
	};

	return analyzedObject;
};

export default analyzeArray;

