const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'magic is fun',
    cookie: {}
}));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mtg');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./services/comment-service')(app);
require('./services/moderator-service')(app);
require('./services/normal-user-service')(app);

app.listen(process.env.PORT || 4000);
