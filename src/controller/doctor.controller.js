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

export const doctorLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });

    if (!doctor) {
      return res.status(400).json({ failure: "Doctor does not exist" });
    } else if (!password) {
      return res.status(400).json({ failure: "Password is required" });
    } else {
      return res.status(200).json({ success: "Login successful" });
    }
  } catch (e) {
    res.status(403).json("Invalid request: " + e);
  }
};

export const displayDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    // Find the doctor by ID
    const doctor = await Doctor.findById(doctorId);

    if (doctor) {
      res.status(200).json({ message: "Retrieving data from database" });
      res.status(200).json(doctor);
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving doctor information", error });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json("Username and Password are required");
    }
    const doctor = new Doctor({
      fullname,
      username,
      password,
    });
    await Doctor.findByIdAndUpdate(req.params.id, {
      fullname,
      username,
      password,
    });
    res.send("Your information was updated");
  } catch (e) {
    console.log(e);
  }
};
export const deleteDoctor = async (req, res) => {
  try {
    const findDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!findDoctor) {
      res.send("Doctor not found.");
    } else {
      res.send("Your information was deleted");
    }
  } catch (e) {
    console.log(e);
  }
};
