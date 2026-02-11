const sharp = require('sharp');
const images = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
];
function obrobka(i) {
  let file = images[i];
  let name = 'result-image' + i;
  sharp(file).rotate(90).toFile(name + '_90.jpg');
  sharp(file).rotate(180).toFile(name + '_180.png');
  sharp(file).rotate(270).toFile(name + '_270.webp');
  sharp(file).rotate(360).toFile(name + '_360.avif');
  
  console.log('Фотографія ' + i + ' оброблена!');
}

obrobka(0); 
obrobka(1); 
obrobka(2);
obrobka(3);
