import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config();
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
//variables
const port = process.env.PORT || 3000;
const __dirname = path.resolve();
// Middleware to parse JSON request bodies
app.use(express.json({ limit: "10mb" })); // Increase JSON payload limit to 10MB
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
connectDB();

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
  });
}
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
