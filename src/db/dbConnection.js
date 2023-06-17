import mongoose from "mongoose";

const dbConnection = () => {
  const URL = `mongodb+srv://bimochanbajimaya:bmocchan07@cluster0.h4jvxi3.mongodb.net/QuickCare
`;
  try {
    mongoose.connect(process.env.DATABASE);
    console.log("Database Connected");
  } catch (e) {
    console.log(e);
  }
};

export default dbConnection;
