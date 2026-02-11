const sharp = require('sharp');
const fs = require('fs');
const images = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
];
const degrees = [90, 180, 270, 360];
const formats = ['jpeg', 'png', 'webp', 'avif'];
async function start() {
  for (let i = 0; i < images.length; i++) {
    const name = "result-image" + i;
    for (let j = 0; j < degrees.length; j++) {
      for (let k = 0; k < formats.length; k++) {
        const newName = name + '_' + degrees[j] + '.' + formats[k];        
        await sharp(images[i])
          .rotate(degrees[j])
          .toFormat(formats[k])
          .toFile(newName);
        console.log('Фото збережене:', newName);
      }
    }
  }
}

start()
