import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Appointment = new mongoose.model("Appointment", appointmentSchema);
export default Appointment;
