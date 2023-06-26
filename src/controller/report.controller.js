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

// Display Report
export const displayReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const report = await Report.findById(reportId);
    if (report) {
      res.status(200).json({ message: "Retrieving data from database" });
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error retrieving report information", e });
  }
};

// Update Report
export const updateReport = async (req, res) => {
  try {
    const { follow_up, prescription } = req.body;

    if (!follow_up || !prescription) {
      return res.status(400).send("Follow up and prescription required");
    }
    const report = new Report({
      follow_up,
      prescription,
    });
    await Report.findByIdAndUpdate(req.param.id, {
      follow_up,
      prescription,
    });
    res.send("Report updated");
  } catch (e) {
    res.status(500).json({ message: "Error updating report", e });
  }
};

// Delete Report
export const deleteReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const report = await Report.findByIdAndDelete(reportId);
    if (report) {
      res.status(200).json({ message: "Report deleted" });
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Error deleting report", e });
  }
};
