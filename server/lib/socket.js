import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
export function getRecieverSocketId(recieverId) {
  return userSocket[recieverId];
}
const userSocket = {};
io.on("connection", (socket) => {
  console.log("A user is connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocket[userId] = socket.id;
  }
  io.emit("getOnlineUsers", Object.keys(userSocket));
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocket[userId];
    io.emit("getOnlineUsers", Object.keys(userSocket));
  });
});

export { io, app, server };
