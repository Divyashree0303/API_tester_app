import mongoose from "mongoose";

const MONGODB_URI=process.env.NEXT_PUBLIC_MONGODB_URI;

const connect = async() => {
    const connectionState = mongoose.connection.readyState;

    try{
        await mongoose.connect(MONGODB_URI,{
            dbName:"apitesting",
            bufferCommands:false
        })
        // console.log("connected");
    }catch(error){
        console.log("error in connecting to database",error);
        throw new Error("error in connecting to database");
    }
}

export default connect;