const { join } = require('path');
const getJson = require('../../utils/getJson');
const saveJson = require('../../utils/saveJson');

const path = join(__dirname, '..', '..', 'data', 'expenses.json');

const update = (req, res) => {
  const json_tmp = getJson(path);
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= json_tmp.length) {
    return res.status(400).json({ error: 'Índice inválido.' });
  }

  json_tmp[index].description = req.body.desc;
  json_tmp[index].amount = parseFloat(req.body.valor);
  json_tmp[index].date = req.body.date;
  json_tmp[index].category = req.body.categoria;

  saveJson(json_tmp, path);

  res.json({ ok: true });
};

module.exports = { update };










