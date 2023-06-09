import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: Number,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const User = new mongoose.model("User, userSchema");
export default User;
