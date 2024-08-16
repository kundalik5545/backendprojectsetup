// Part 03
//require("dotenv").config({path:"./env"})

import connectDB from "./db/dbconnection.js";

import dotenv from "dotenv";
dotenv.config({ path: "./env" });

//Connect database function called here after importing
connectDB();

/* Part 01
Simple function to connect database
import mongoose from "mongoose";

function connectDB() {}

connectDB();
 */

/* Part 02
//Now we use iffy from javascript

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Erro; ", error);
    throw error;
  }
};

*/
