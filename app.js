/**
 * Created by aaron on 1/24/17.
 */
var app = require('express')();
var http = require('http').Server(app);
// var io = require('socket.io')(http);
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.sendfile('./index.html');
    // console.log("got /")
});

app.use(express.static(path.join(__dirname, './')));
http.listen(3000, function () {
    console.log('listening on *:3000');

});


module.exports = app;