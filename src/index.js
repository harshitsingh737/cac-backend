import dotenv from "dotenv";
dotenv.config(); 

// Mongoose connects your app to database.
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!!",err);
    
})








/*
import express from "express";
const app = express();

;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
       app.on("Error" , (error)=>{
        console.log("ERROR",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
        
          
    }catch(error)
    {
        console.log("ERROR:",error );
        
    }
})()
*/