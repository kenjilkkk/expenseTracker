const fs = require('fs');

const saveJson = (data, path) => fs.writeFileSync(path, JSON.stringify(data, null, '\t'));

module.exports = saveJson;
