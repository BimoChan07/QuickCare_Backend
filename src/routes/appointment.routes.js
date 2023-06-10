import express from "express";
import { createAppointment } from "../controller/appointment.controller";

const router = express.Router();
router.use(express.json());
router.post("/createAppointment", createAppointment);

export default router;
