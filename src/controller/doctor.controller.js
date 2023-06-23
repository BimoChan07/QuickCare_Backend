import Doctor from "../models/doctor.model.js";

export const createDoctor = async (req, res) => {
  try {
    const {
      fullname,
      age,
      gender,
      username,
      password,
      licenseNo,
      department,
      licensePhtoto,
      isAdmin,
    } = req.body;
    // Validate request
    if (!username || !password) {
      return res.status(400).send("Username and password required");
    }

    const doctor = new Doctor({
      fullname,
      age,
      gender,
      username,
      password,
      licenseNo,
      department,
      licensePhtoto,
      isAdmin,
    });

    await doctor.save();
    res.send("Doctor Saved");
  } catch (e) {
    res.status(500).send("An error occurred: " + e);
  }
};
