
 /// how to link url and secret key???
/// we need to install npm package related to supabase

import {createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

let supabase;

try{
    supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SECRET_KEY
 
    );
    console.log("Connected to DB")
}catch(err){
    console.log("Failed to connect to DB")
}

export default supabase




