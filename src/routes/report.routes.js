import express from "express";
import {
  createReport,
  displayReport,
  updateReport,
  deleteReport,
} from "../controller/report.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createReport", createReport);
router.post("/displayReport", displayReport);
router.post("/updateReport", updateReport);
router.post("/deleteReport", deleteReport);

export default router;
