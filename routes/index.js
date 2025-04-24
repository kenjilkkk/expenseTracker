var express = require('express');
var router = express.Router();
const getJson = require('../utils/getJson');
const { join } = require('path');

const path = join(__dirname, '..','data','expenses.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  const despesas = getJson(path);


  const total = despesas.reduce((total, d) => total + d.amount, 0);
  res.render('index', { despesas, total});
});

module.exports = router;



