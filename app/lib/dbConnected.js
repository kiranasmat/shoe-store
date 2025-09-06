import mongoose from "mongoose";
let isConnected = false;
export default async function connectDB() {
    if (isConnected) {
         console.log("MONGODB_URI:", process.env.MONGODB_URI);
        console.log("mongoDB is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
        isConnected = true;
        console.log("MongoDB connected succesfully")
    } catch (error) {
        console.error("MongoDB connection error",error)
    }
}