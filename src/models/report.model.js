import mongoose, { Schema } from "mongoose";

const reportSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  follow_up: {
    type: Date,
    required: true,
    min: Date.now,
  },
  prescription: {
    type: String,
    required: true,
    maxlength: 500,
  },
});

const Report = new mongoose.model("Report", reportSchema);

export default Report;
