const sharp = require('sharp');
const fs = require('fs');
const images = [
    'input1.jpg',
    'input2.jpg',
    'input3.jpg',
    'input4.jpg',
];
const degrees = [90, 180, 270, 360];
const formats = ['jpeg', 'png', 'webp', 'avif'];
async function start() {

    const tasks = images.flatMap((img, i) => 
    degrees.flatMap(deg => 
      formats.map(fmt => ({
        source: img,
        degree: deg,
        format: fmt,
        outputName: `result-image${i}_${deg}.${fmt}`
      }))
    )
  );

  for await (const task of tasks) {
if (!fs.existsSync(task.source)) {
console.error(`Error: File "${task.source}" not found.`);
continue;
}
try{
      await sharp(task.source)
        .rotate(task.degree)
        .toFormat(task.format)
        .toFile(task.outputName);
        
      console.log('Photo saved:', task.outputName);
    } catch (err) {
      console.error(`Error processing ${task.outputName}:`, err);
    }
  }
}

start();
