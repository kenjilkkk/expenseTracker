const fs = require('fs');

const getJson = (path) => {
	const data = fs.existsSync(path) ? fs.readFileSync(path) : [];
	try {
		return JSON.parse(data);
	}catch (e){
		return [];
	}
}

module.exports = getJson;
