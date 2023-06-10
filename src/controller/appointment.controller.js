import Appointment from "../models/appointment.model";

export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      date: req.body.date,
      time: req.body.date,
    });
    await appointment.save();
    res.send("Appointment booked");
  } catch (e) {
    console.log(e);
  }
};
