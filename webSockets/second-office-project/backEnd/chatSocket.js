import { Server } from "socket.io";

export const initializeWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:8100", "http://localhost:4200"],
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    // App creates a new query
    socket.on("chat:create", ({ queryId, user }) => {
      socket.join(queryId);

      console.log("New chat created:", queryId);

      // Notify admin panel
      io.emit("chat:new", {
        queryId,
        user
      });
    });

    // Join existing chat
    socket.on("chat:join", ({ queryId }) => {
      socket.join(queryId);
      console.log(`${socket.id} joined ${queryId}`);
    });

    // Send message
    socket.on("chat:message", ({ queryId, sender, text }) => {
      io.to(queryId).emit("chat:message:new", {
        sender,
        text,
        time: new Date()
      });
    });

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
};