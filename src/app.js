import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//This is configuration for json data
app.use(express.json({ limit: "16kb" }));
//THis is configuration for url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//THis is configuration for public data files
app.use(express.static("public"));
//This is configuration for url data
app.use(cookieParser());
export { app };
