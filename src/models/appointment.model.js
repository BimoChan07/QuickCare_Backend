import mongoose, { Schema } from "mongoose";

const appointmentSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  doctor_id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Appointment = new mongoose.model("Appointment", appointmentSchema);
export default Appointment;
