import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const { created_at, doctor_id, user_id, status } = req.body;
    const appointment = new Appointment({
      created_at,
      doctor_id,
      user_id,
      status,
    });
    await appointment.save();
    res.send("Appointment booked");
  } catch (e) {
    console.log(e);
  }
};
