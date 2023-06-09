import Doctor from "../models/doctor.model.js";
export const createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });
    await doctor.save();
    res.send("Doctor Saved");
  } catch (e) {
    console.log(e);
  }
};
