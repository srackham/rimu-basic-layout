const test = require('tape');
const layout = require('./index.js');
const fs = require('fs');

let header = fs.readFileSync('header.rmu').toString();
let footer = fs.readFileSync('footer.rmu').toString();

test('layout tests', function (t) {
  t.equal(header, layout.header, "header check");
  t.equal(footer, layout.footer, "footer check");
  t.end();
});
