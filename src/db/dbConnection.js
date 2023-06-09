import mongoose from "mongoose";
import "dotenv/config";
const dbConnection = () => {
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("Database Connected");
  } catch (e) {
    console.log(e);
  }
};

export default dbConnection;
