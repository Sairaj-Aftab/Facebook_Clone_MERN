import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import user from "./routes/user.js";
import mongoDBconnected from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";

// Initialize
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Folder
app.use(express.static("api/public"));

// Dot Env Environment
const PORT = process.env.PORT || 8080;

app.use("/api/v1/user", user);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  mongoDBconnected();
  console.log(`Server is running on Port : ${PORT}`.bgGreen.black);
});
