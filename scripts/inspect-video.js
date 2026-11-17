const fs = require('fs');

function inspectMp4(filePath) {
  const buf = fs.readFileSync(filePath);
  console.log('File size:', buf.length);
  
  // Search for 'tkhd' box to get width and height
  let offset = 0;
  while (offset < buf.length - 8) {
    const size = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    if (size === 0) break;
    
    if (type === 'moov' || type === 'trak' || type === 'mdia') {
      offset += 8;
      continue;
    }
    
    if (type === 'tkhd') {
      // In tkhd, version is at offset+8
      const version = buf.readUInt8(offset + 8);
      // width and height are fixed point 16.16 at the end of tkhd
      // if version == 0, length is 84, width is at offset + 84 - 8, height at offset + 84 - 4
      const widthOffset = version === 1 ? offset + 96 : offset + 84 - 8;
      const heightOffset = version === 1 ? offset + 100 : offset + 84 - 4;
      if (heightOffset + 4 <= buf.length) {
        const width = buf.readUInt32BE(widthOffset) >> 16;
        const height = buf.readUInt32BE(heightOffset) >> 16;
        if (width > 0 && height > 0) {
          console.log(`Track dimension: ${width}x${height}`);
        }
      }
    }
    
    offset += size;
  }
}

inspectMp4('c:/cei ice/public/videos/cei-flavour-transformation.mp4');
