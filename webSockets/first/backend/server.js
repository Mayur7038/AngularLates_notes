const express = require("express");
const http = require("http");
const { Server } = require("socket.io")
const app = express();


const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message from client:", data);

    // send to all clients
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});



server.listen(3000, () => {
    console.log("Server running on port 3000");

})