let fs = require('fs');
let path = require('path');

module.exports.header = fs.readFileSync(path.resolve(__dirname,'header.rmu')).toString();
module.exports.footer = fs.readFileSync(path.resolve(__dirname,'footer.rmu')).toString();
