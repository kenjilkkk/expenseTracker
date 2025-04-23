const express = require('express');
const { join } = require('path');
const getJson = require('../../utils/getJson');
const saveJson = require('../../utils/saveJson');
const editarController = require('../controllers/editarController');

const path = join(__dirname,'..', '..', 'data', 'expenses.json');

const router = express.Router();

router.put("/:index", editarController.update);

module.exports = router;

