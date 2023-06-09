import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect("mongodb://localhost:27017");
    console.log("Database Connected");
  } catch (e) {
    console.log(e);
  }
};

export default dbConnection;
