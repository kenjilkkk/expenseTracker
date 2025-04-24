const express = require('express');
const { join } = require('path');
const saveJson = require('../../utils/saveJson');
const getJson = require('../../utils/getJson');
const deleteController = require('../controllers/deleteController');

const router = express.Router();

const path = join(__dirname, '..', '..','data','express.json');



router.delete('/:index', deleteController.delete_data);
module.exports = router;
