import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  contactNo: {
    required: true,
    type: String,
  },
  dob: {
    required: true,
    type: Date,
  },
  address: {
    required: true,
    type: String,
  },

  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);
export default User;
