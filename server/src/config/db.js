const mongoose = require('mongoose');
require("dotenv").config();


console.log("MONGO_URL from env:", process.env.MONGO_URL);

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully!");
    }catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};


module.exports = connectDB;