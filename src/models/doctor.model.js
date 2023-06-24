import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  licenseNo: {
    type: Number,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  licensePhoto: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);
export default Doctor;
