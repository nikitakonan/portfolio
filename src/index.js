const pug = require('pug');
const fs = require('fs');

const resume = require('./resume.json')

function updatePublicDoc(html) {
  fs.writeFileSync('./docs/index.html', html);
}

const locals = {
  title: 'Hello, World',
  resume,
};

pug.renderFile('./src/layout.pug', locals, (err, html) => {
  if (err) {
    throw err;
  }
  updatePublicDoc(html);
});
