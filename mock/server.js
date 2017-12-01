var express = require('express')
var proxy = require('http-proxy-middleware')

var router = require('./router');

var app = express()

app.use(router);

app.listen(3000);