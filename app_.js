const express = require('express');

// express app
const app = express();


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/', (req, res) => {
    // using express you dont't have to write and end
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.render('about')
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


// 404 page     keep at the end as a last resort, if put on top will exucute first
app.use((req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname });
});
