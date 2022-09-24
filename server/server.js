const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();
app.use(express.static(`${__dirname}/../client`));
const server = http.createServer(app);
const io = socketio(server, {
    cors: {origin: "*"}
});

server.on('error', (err) => {
  console.error(err);
});

server.listen(process.env.PORT || 80, () => {
  console.log('server is ready on port 80');
});

io.on('connection', (socket) => {
    console.log('A new user has joined with a id of ', socket.id)
    socket.on("disconnect", () => {
      console.log('A user disconnected, there id was ', socket.id)
    })
});
// boiller plate code for a socket.io server

io.on("connection", (socket) => {
    socket.on("ping", (callback) => {
      callback();
    });
});
// ping thing, not nessary ^