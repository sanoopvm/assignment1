const express = require("express");
const socket = require("socket.io");
var app = express();
var server = app.listen(4000, function () {
    console.log("server is running");
});
app.use(express.static("public"));
var io = socket(server);
io.on("connection", function (socket) {
    console.log("user connected"+socket.id);
    
    
    socket.on("join", function (roominput) {
    
        var rooms = io.sockets.adpater.rooms;
        var room=rooms.get(roominput);
        if (room == undefined) {
            socket.join(roominput);
            console.log("created room");
        }
        else if (room.size == 1) {
            socket.join(roominput);
            console.log("joined room");
        }
        else {
            console.log("room is full");
        }
    });
});
