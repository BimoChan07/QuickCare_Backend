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

// Display Appointment
export const displayAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    const appointment = await Appointment.findById(appointmentId);
    if (appointment) {
      res
        .status(200)
        .json({ message: "Retrieving data from database", appointment });
      res.status(200).json(appointment);
    } else {
      res.status(200).json({ message: "Appointment deleted" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error deleting appointment", e });
  }
};

// Update Appointment
export const updateAppointment = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).send("Status required");
    }
    const appointment = new Appointment({
      status,
    });
    await Appointment.findByIdAndUpdate(req.params.id, {
      status,
    });
    res.send("Appointment updated");
  } catch (e) {
    res.status(500).json({ message: "Error updating appointment", e });
  }
};

// Delete Appointment
export const deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findByIdAndDelete(appointmentId);
    if (appointment) {
      res.status(200).json({ message: "Appointment deleted" });
    } else {
      res.status(404).json({ message: "Appointment not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error deleting appointment", e });
  }
};
