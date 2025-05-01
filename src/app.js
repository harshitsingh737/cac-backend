import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// app.use we generally use to add middleware to our app. Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
app.use(cors({

        origin : process.env.CORS_ORIGIN, 
        credentials:true
    }
))

app.use(express.json({limit:"16kb"}))  
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))
app.use(cookieParser())
export {app};