import User from "../models/user.model";
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({});
    res.send(user);
  } catch (e) {
    console.log(e);
  }
};
