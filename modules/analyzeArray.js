const getAvearage = (array) => {
	return (
		array.reduce((sum, curr) => {
			return sum + curr;
		}) / array.length
	);
};

const getMinimumValue = (array) => {
	return Math.min(...array);
};

const getMaximumValue = (array) => {
	return Math.max(...array);
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

