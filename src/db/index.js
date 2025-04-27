import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";

// We Are using async and await to connect to the database because it is a promise based library and our DB is in another continent
// and it takes time to connect to the database. So we are using async and await to make sure that the connection is established before we start using the database.
// We are also using try and catch to handle any errors that may occur while connecting to the database. If there is an error, we are logging it to the console and throwing it so that we can handle it later.

const connectDB = async () =>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB is connected !! DB HOST:${connectionInstance}`);
    }
       
    catch(error){
        console.log("MONGODB connection error:",error);
        process.exit(1)
    }
}


export default connectDB;
// We are exporting the connectDB function so that we can use it in other files. We are also using the default export so that we can import it using any name we want.
        