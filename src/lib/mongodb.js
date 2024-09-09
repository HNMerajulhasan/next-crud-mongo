import mongoose from "mongoose";

export async function dbConnect(){
 
  try{
    const dbConn = await mongoose.connect(String(process.env.MONGODB_URI))
    return dbConn;
    console.log('db connection is Success')
  }catch(err){
    throw new Error(err)
  } 
}