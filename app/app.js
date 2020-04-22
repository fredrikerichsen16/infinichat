require('dotenv').config();

const express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    path = require('path');
port = process.env.PORT || 3000;

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../static')));
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(session({
    secret: process.env.SESSION_KEY,
    cookie: {
        secure: true,
        httpOnly: true
    }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes.js');

app.use('/', routes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});