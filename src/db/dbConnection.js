import mongoose from "mongoose";

const dbConnection = async () => {
    try {
         await mongoose.connect("mongodb://localhost:27017");
        console.log("Database Connected");
    } catch (e) {
        console.log(e);
    }
};

module.exports ={ dbConnection };