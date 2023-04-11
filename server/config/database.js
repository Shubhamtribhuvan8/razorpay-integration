import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
export const connetDB=async ()=>{
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dkffjqp.mongodb.net/Razorpay?appName=mongosh+1.7.1`)
  console.log("Connection Established {MangoDB}")
}
