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

//This will convert all data into json data ==> we gave size for that in kb ==> if sixe > 16kb we get 413 status code
app.use(express.json({ limit: "16kb" }));

//This configuration is used to code url in %20 for space like format
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//THis is configuration for public data files
app.use(express.static("public"));

//This is configuration for url data
app.use(cookieParser());

export { app };
