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
    res.status(201).json({ success: true, message: "Appointment booked" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Appointment creation failed" });
  }
};
