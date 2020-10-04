const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('showing that code continues to excute and readFile excutes upon its own completeion')

// write files
fs.writeFile('./docs/blog1.txt', 'over written text', () => {
    console.log('file over writen');
});

fs.writeFile('./docs/blog2.txt', 'I exist now!', () => {
    console.log('file written');
});

// directories
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.group('folder created') ;    // creates err if folder already exists
});
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}

