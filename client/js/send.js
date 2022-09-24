const socket = io();

socket.on('connect', () => {
    console.log(`you have connected to the socket server: ${Socket.id}`)
})

setInterval(() => {
    const start = Date.now();
    socket.emit("ping", () => {
      const duration = Date.now() - start;
      console.log(duration);
    });
}, 5000);