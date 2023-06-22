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

// user login controller
const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findone({ username });

    // if user does not exist
    if (!user) {
      return res.status(400).json({ failure: "User does not exist" });
    }
    if (!password) {
      return res.status(400).json({ failure: "Password is required" });
    }
    // if user exists, compare password
    const isMatch = await user.comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ failure: "Incorrect password" });
    } else {
      res.send("Login successful");
    }

    // create JWT token

    const token = user.generateToken();

    res.status(200).json({
      token,
      username,
    });
  } catch (e) {
    res.status(403).json(e);
  }
};
