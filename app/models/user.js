import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String,
       required:true 
    },
    password: {
        type: String,
        required:true
    }
})
export default mongoose.models.User || mongoose.model("User",userSchema)