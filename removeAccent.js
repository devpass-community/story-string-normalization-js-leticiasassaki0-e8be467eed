function removeAccent(str) {
	const response = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	return response;
}

module.exports = removeAccent;
