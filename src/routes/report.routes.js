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
router.post("/displayReport/:id", displayReport);
router.post("/updateReport/:id", updateReport);
router.post("/deleteReport/:id", deleteReport);

export default router;
