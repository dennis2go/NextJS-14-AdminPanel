import mongoose from "mongoose";

let connection: {};
export const connectToDB = async() => {
    try {
        if(connection) {
            return;
        }
        else {
            const temp = await mongoose.connect(process.env.MONGO!);
            connection = temp.connections[0].readyState;
        }
        
    }
    catch(error) {
        throw new Error("Databank Connecting ERROR:"+ error);
    }
}