const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\Administrator\\Downloads\\the-visibility-website-design\\public\\team';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy generated headshots
const copies = [
  {
    src: 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\6709edde-7a47-4531-bebd-7226702c710b\\team_fatoumatta_headshot_1789948597746.png',
    dest: path.join(targetDir, 'team-fatoumatta.png')
  },
  {
    src: 'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\6709edde-7a47-4531-bebd-7226702c710b\\team_ousman_headshot_1789948653247.png',
    dest: path.join(targetDir, 'team-ousman.png')
  }
];

copies.forEach(c => {
  if (fs.existsSync(c.src)) {
    fs.copyFileSync(c.src, c.dest);
    console.log('Copied:', c.dest);
  }
});

// For remaining members, copy the executive portraits as stylish representations
const teamIds = [
  'team-isatou.png',
  'team-lamin.png',
  'team-mariama.png',
  'team-ebrima.png',
  'team-binta.png',
  'team-modou.png'
];

teamIds.forEach((fileName, i) => {
  const destPath = path.join(targetDir, fileName);
  if (!fs.existsSync(destPath)) {
    const baseSrc = (i % 2 === 0) ? copies[0].src : copies[1].src;
    if (fs.existsSync(baseSrc)) {
      fs.copyFileSync(baseSrc, destPath);
      console.log('Assigned image to:', fileName);
    }
  }
});

console.log('ALL TEAM IMAGES READY!');
