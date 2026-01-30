import express from "express";


export const UserRouter = express.Router();




UserRouter.post("/signup", (req,res)=>{
    try{

        /// write a logic that pushes the email and password from req.body to Supabase
        /// once Pshing is  success, then send res as success

        /// This Node-Express application should get linked with Supabase

        /// How to link?? Check documentation

        /// To link supabase and Noide-Express ,
        /// We need Supabase url and api (service key not anon key)
        /// Linking in Config folder


        res.status(200).json({message:"Signup success "})
    }catch(err){
        res.status(500).json({message: "Something went wrong, please try again later"})

    }

})


