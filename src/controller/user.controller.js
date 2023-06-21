import User from "../models/user.model.js";
export const createUser = async (req, res) => {
  try {
    const { fullname, username, password, contactNo, dob, address, isAdmin } =
      req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password required");
    }
    const user = new User({
      fullname,
      username,
      password,
      contactNo,
      dob,
      address,
      isAdmin,
    });
    await user.save();
    res.send("user saved");
  } catch (e) {
    console.log(e);
  }
};
