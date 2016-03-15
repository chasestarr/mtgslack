'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const hellobot = require('./hellobot.js');
const findcard = require('./findcard.js');

let app = express();
let port = process.env.PORT || 3000;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//test route
app.get('/', function(req, res) { res.status(200).send('Hello World!') });

//hellobot route
app.post('/hello', hellobot);

//card route
app.post('/card', findcard);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function(){
    console.log('listening on port: ', port);
});