import mongoose from "mongoose";

export const DB = ()=>{
    try {
        const connect = mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log("MongoDB Connected");
        }
    } catch (error) {
        console.log("Error to DB", error)
    }
}
