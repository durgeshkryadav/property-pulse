import mongoose from "mongoose";
let isConnected = false;
const connectDB = async()=>{
    mongoose.set("strictQuery",true);
    //if connect
    if(isConnected){
        console.log("already database connected");
        return
    }
    //if not connected
    try {
        if(!isConnected){
            const abc = await mongoose.connect(process.env.MONGOD_URI as string);
            if(abc){
                console.log("database connected succesfully...");
                isConnected = true;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;