import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./middleware/error.js";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import user from "./controller/userController.js";
import cors from "cors";

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "backend/config/.env",
  });
}

// import routes
app.use("/api/v2/user", user);

// ErrorHandling
app.use(ErrorHandler);

export default app;