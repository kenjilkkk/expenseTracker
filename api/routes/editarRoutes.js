const express = require("express")
const router = express.Router();
const { join } = require('path');
const getJson = require("../../utils/getJson")


const htmlPath = join(__dirname, '..','..','public','html','editar.html');
const jsonPath = join(__dirname, '..','..','data','expenses.json')

router.get("/:index", (req, res) => {

	res.sendFile(htmlPath);
})

router.get("/search/:index", (req, res) => {
	const index = req.params.index;
	const data = getJson(jsonPath);
	const editData = data.filter((item, indx) => {
		if(indx === parseFloat(index)){
			return item
		}
	})
	
	res.status(200).json(editData);

})

module.exports = router;
