import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  bookedTime: {
    type: Timestamp,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

const Appointment = new mongoose.model("Appointment", appointmentSchema);
export default Appointment;
