const { join } = require('path');
const fs = require('fs');
const saveJson = require('../../utils/saveJson');
const getJson = require('../../utils/getJson');

const path = join(__dirname, '..', '..', 'data', 'expenses.json');

const postDespesas = (req, res) => {
	const data = getJson(path);

	const desc = req.body.desc;
	const amount = req.body.valor;
	const date = req.body.data;
	const category = req.body.categoria;

	data.push({
		description: desc,
		amount: amount,
		date: date,
		category: category
	});

	saveJson(data, path);
	const total = data.reduce((sum, d) => sum + d.amount, 0);
	res.status(200).render('index', { data,  total })
}

const getDespesas = (req, res) => {
	const data = getJson(path);

	res.json(data);
}

module.exports = { postDespesas, getDespesas};
