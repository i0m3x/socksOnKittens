var express = require('express');
var socket = require('socket.io');



// app setup
var app = express();

var server = app.listen(4000, function() {
    console.log('listening on port 4000')
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function(socket){ //socket btw client and server
    console.log('made socket connection', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
});