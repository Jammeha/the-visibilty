const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\6709edde-7a47-4531-bebd-7226702c710b\\hero_agency_visual_1789919283768.png';
const dest = 'c:\\Users\\Administrator\\Downloads\\the-visibility-website-design\\public\\hero-agency-visual.png';

try {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied to:', dest);
} catch (err) {
  console.error('Copy failed:', err);
}
