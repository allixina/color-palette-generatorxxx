// index.js
const randomColor = require('randomcolor');

function generateColorPalette() {
  const palette = randomColor({ count: 5 });
  console.log('Generated Color Palette:', palette);
}

generateColorPalette();
