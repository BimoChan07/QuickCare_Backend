import express from "express";
import { createReport } from "../controller/report.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createReport", createReport);

export default router;
