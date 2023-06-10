import mongoose, { Schema } from "mongoose";

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Appointment = new mongoose.model("Appointment", appointmentSchema);
export default Appointment;
