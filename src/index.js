// This is a starting point for backend.

import connectDB from "./db/dbconnection.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
//require("dotenv").config({path:"./env"}) ==> alternative for above benefit is one line execution but not consistent with our code structure here we use require than import

//Connect database function called from db folder
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server is running on port : ${process.env.PORT}`);
    });

    app.on("Error", (error) => {
      console.log("🚫 Error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("🚩 MONGO db connection failed !!!", err);
  });
