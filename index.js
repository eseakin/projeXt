'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('A user connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});