import mongoose, { Schema } from "mongoose";
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // gender: {
  //   type: String,
  //   required: true,
  // },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // licenseNo: {
  //   type: String,
  //   required: true,
  // },
  // department: {
  //   type: String,
  //   required: true,
  // },
  // licensePhoto: {
  //   type: String,
  //   required: true,
  // },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);
export default Doctor;
