import express from "express";
import { UserRouter } from "./routes/user.routes.js";


const app = express();
app.use(express.json())


/// Test Route
app.get ("/", (req,res) =>{
    try{
        res.status(200).json({message:"This is test route"})
    }catch(err){
        res.status(500).json({message: "Something went wrong, please try again later"})

    }
})

///Routes
app.use("/users", UserRouter)

/// Undefined Route
app.use((req,res)=>{
        try{
        res.status(404).json({message:"This Request is not found"})
    }catch(err){
        res.status(500).json({message: "Something went wrong, please try again later"})


    }
})
app.listen (8080, () =>{
    console.log("server started")
})