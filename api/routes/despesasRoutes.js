const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController');

router.post('/', despesasController.postDespesas);
router.get('/', despesasController.getDespesas);

module.exports = router;
