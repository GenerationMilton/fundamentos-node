const sharp= require('sharp');

sharp('selva.jpg')
    .resize(80)
    .grayscale()
    .toFile('resized.png');