import User from "../models/user.model.js";
export const createUser = async (req, res) => {
  try {
    const { name, username, password, isAdmin } = req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password required");
    }
    const user = new User({
      name,
      username,
      password,
      isAdmin,
    });
    await user.save();
    res.send("user saved");
  } catch (e) {
    console.log(e);
  }
};
