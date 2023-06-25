import express from "express";
import {
  createAppointment,
  displayAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controller/appointment.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createAppointment", createAppointment);
router.post("/displayAppointment/:id", displayAppointment);
router.post("/updateAppointment/:id", updateAppointment);
router.post("/deleteAppointment/:id", deleteAppointment);

export default router;
