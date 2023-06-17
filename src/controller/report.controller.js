import Report from "../models/report.model.js";
import "dotenv/config.js";

export const createReport = async (req, res) => {
  try {
    const report = new Report({
      user_id: req.body.user_id,
      prescription: req.body.prescription,
    });

    await report.save();
    res.send("Report Saved");
  } catch (e) {
    console.log(e);
  }
};
