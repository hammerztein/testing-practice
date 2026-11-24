const capitalize = (string) => {
	if (string === '') return '';
	return string.at(0).toUpperCase().concat(string.slice(1));
};

export default capitalize;

