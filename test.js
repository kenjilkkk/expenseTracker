const getJson = require("./utils/getJson");

const data = getJson("./data/expenses.json");

const edited = data.filter((item, index) => {
	if(index == 0) {
	return item
	}
})

console.log(edited);
