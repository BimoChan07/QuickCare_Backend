import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      created_at: req.body.created_at,
      doctor_id: req.body.doctor_id,
      user_id: req.body.user_id,
      status: req.body.status,
    });
    await appointment.save();
    res.send("Appointment booked");
  } catch (e) {
    console.log(e);
  }
};
