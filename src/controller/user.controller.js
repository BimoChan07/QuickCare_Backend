import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { fullname, username,email,  password, contactNo, dob, address, isAdmin } =
      req.body;

    if (!email || !password) {
      return res.status(400).send("Username and password required");
    }
    const user = new User({
      fullname,
      email, 
      password,
      // username,
      // contactNo,
      // dob,
      // address,
      // isAdmin,
    });
    await user.save();
    res.send("user saved");
  } catch (e) {
    res.send(e)
    console.log(e);
  }
};

// user login controller
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

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
      email: user.email,  
    });
  } catch (e) {
    res.status(403).json("Invalid request" + e);
  }
};

// Display User
export const displayUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (user) {
      res.status(200).json({ message: "Retrieving data from database" });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error retrieving user information", e });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const { fullname, username, password, contactNo, address } = req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password required");
    }
    const user = new User({
      fullname,
      username,
      password,
      contactNo,
      address,
    });
    await User.findByIdAndUpdate(req.params.id, {
      fullname,
      username,
      password,
    });
    res.send("User updated");
  } catch (e) {
    console.log(e);
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (user) {
      res.status(200).json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error deleting user", e });
  }
};
