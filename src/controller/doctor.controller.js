import Doctor from "../models/doctor.model.js";

export const createDoctor = async (req, res) => {
  try {
    const { name, username, password, isAdmin } = req.body;
    // Validate request
    if (!username || !password) {
      return res.status(400).send("Username and password required");
    }

    const doctor = new Doctor({
      name,
      username,
      password,
      isAdmin,
    });

    await doctor.save();
    res.send("Doctor Saved");
  } catch (e) {
    res.status(500).send("An error occurred: " + e);
  }
};
