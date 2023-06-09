import { defaultConfiguration } from "express/lib/application";
import mongoose, { Schema } from "mongoose";
const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = new mongoose.model(Admin, adminSchema);
export default Admin;
