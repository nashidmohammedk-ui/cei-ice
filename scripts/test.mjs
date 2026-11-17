import fs from 'fs';
const buf = fs.readFileSync('c:/cei ice/public/videos/cei-flavour-transformation.mp4');
const str = buf.toString('latin1');
console.log('Has soun atom (sound track):', str.includes('soun'));
console.log('Has mp4a atom (AAC audio):', str.includes('mp4a'));
