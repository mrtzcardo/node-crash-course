const fs = require('fs');

const readStream = fs.createReadStream('./docs/sample.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/sample-write.txt');

/*
readStream.on('data', (chunk) => {
    console.log('---NEW CHUNK---');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});
*/

// piping (what we did above but faster)
readStream.pipe(writeStream);

