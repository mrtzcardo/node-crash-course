// example for how everything is set up without EXPRESS seen in app.js

const http = require('http');
const fs = require('fs');
const _ = require('lodash');  // common practice is to use '_' not lo

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);

    // lodash package examples
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hi')
    });

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            case '/about-blah':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;

    }

    // res.write('<head><link rel="styleseet" href="#"</head>');
    // res.write('<p>hello world</p>');
    // res.write('<p>hello world again again</p>');

    // send an html file
    fs.readFile(path, (err, data) => {
        console.log(path)
        if (err) {
            console.log(err);
            res.end();
        } 
        else {
            //res.write(data);      Since ony used once
            res.end(data);
        } 
    })

    // res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for req from port 3000');
});

// in browser tyoe localhost:3000
// inspect and you'll see html code on browser and network deets

