import User from "../models/user.model.js";
export const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });
    await user.save();
    res.send("user saved");
  } catch (e) {
    console.log(e);
  }
};
