import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const url = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        console.log("DataBase Connection Successfull!")
    } catch (error) {
        throw error
        console.log("Error While Connecting DB:-",error)
    } 
}

export default connectDB