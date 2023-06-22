import Report from "../models/report.model.js";
import "dotenv/config.js";

export const createReport = async (req, res) => {
  try {
    const { created_at, user_id, doctor_id, follow_up, prescription } =
      req.body;

    const report = new Report({
      user_id,
      created_at,
      doctor_id,
      follow_up,
      prescription,
    });

    await report.save();
    res.send("Report Saved Successfully.");
  } catch (e) {
    console.log("Error while saving report: " + e);
  }
};
