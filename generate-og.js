const sharp = require('sharp');
const path  = require('path');

sharp(path.join(__dirname, 'og-image.svg'))
  .png()
  .toFile(path.join(__dirname, 'og-image.png'))
  .then(() => console.log('og-image.png generado correctamente'))
  .catch(err => { console.error('Error:', err.message); process.exit(1); });
