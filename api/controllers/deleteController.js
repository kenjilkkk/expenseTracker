const { join } = require('path');
const saveJson = require('../../utils/saveJson');
const getJson = require('../../utils/getJson');

const path = join(__dirname, '..', '..','data','expenses.json');


const delete_data = (req, res) => {
	const index = req.params.index;

	const data = getJson(path);
	data.splice(parseFloat(index),1); //delete
	
	saveJson(data, path);

	res.json({ok: true});
}

module.exports = { delete_data };
