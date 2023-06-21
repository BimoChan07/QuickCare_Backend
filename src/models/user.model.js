import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    required: true,
    type: String,
  },
  username: {
    type: String,
    required: true,
    minlength: 4, // Example validation: Minimum length of 4 characters for the username
    maxlength: 50, // Example validation: Maximum length of 50 characters for the username
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  contactNo: {
    type: String,
    required: true,
    match: /^\d{10}$/,
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
