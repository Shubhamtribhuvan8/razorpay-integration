import { app } from "./app.js";
import {connetDB} from "./config/database.js"
import Razorpay from "razorpay";

export const instanec=new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET_KEY,
})
app.listen(process.env.PORT,()=>{
    connetDB();
    console.log(`Server is Working on ${process.env.PORT}`)
})
// ggg