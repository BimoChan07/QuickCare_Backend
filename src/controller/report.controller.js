import Report from "../models/report.model.js";

export const createReport = async (req, res) => {
  try {
    const report = new Report({
      // created_at: req.body.created_at,
      user_id: req.body.user_id,
      // doctor_id: req.body.doctor_id,
      // follow_up: req.body.follow_up,
      prescription: req.body.prescription,
    });
    await report.save();
    res.send("Report Saved");
  } catch (e) {
    console.log(e);
  }
};
