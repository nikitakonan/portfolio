const pug = require('pug');
const fs = require('fs');

function updatePublicDoc(html) {
  fs.writeFileSync('./public/index.html', html);
}

const locals = {
  title: 'Hello, World',
};

pug.renderFile('./src/layout.pug', locals, (err, html) => {
  if (err) {
    throw err;
  }
  updatePublicDoc(html);
});
