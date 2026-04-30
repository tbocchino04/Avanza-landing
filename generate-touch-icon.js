const sharp = require('sharp');
const path  = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" rx="40" fill="#0D0A1E"/>
  <rect x="20"  y="112" width="50" height="50" rx="8" fill="#5B3DC8"/>
  <rect x="82"  y="62"  width="50" height="50" rx="8" fill="#5B3DC8" fill-opacity=".65"/>
  <rect x="144" y="12"  width="50" height="50" rx="8" fill="#5B3DC8" fill-opacity=".35"/>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, 'apple-touch-icon.png'))
  .then(() => console.log('apple-touch-icon.png generado'))
  .catch(err => { console.error(err.message); process.exit(1); });
