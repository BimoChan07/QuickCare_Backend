import mongoose from "mongoose";

const dbConnection = () => {
  const URL = `mongodb+srv://bimochanbajimaya:bmocchan07@cluster0.h4jvxi3.mongodb.net/QuickCare`;
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("Database Connected Successfully");
  } catch (e) {
    console.log("Error connecting to database: " + e);
  }
};

export default dbConnection;
