import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50,
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
    // required: true,
    type: Date,
  },
  address: {
    required: true,
    type: String,
  },
  isAdmin: {
    type: Boolean,
    // required: true,
  },
});

// Hash password before saving to database
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

//created a method to generate token
userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      fullname: this.fullname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const User = new mongoose.model("User", userSchema);
export default User;
