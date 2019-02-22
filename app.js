const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCopyrightYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (input) => {
    return input.toUpperCase();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    res.render('home.hbs', {
        "title": 'Home',
        "username": 'rishabh'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        "title": 'About'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        "errorMessage": 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('App started!!!');
});
