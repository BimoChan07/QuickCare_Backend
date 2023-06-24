import express from "express";
import {
  createDoctor,
  displayDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controller/doctor.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createDoctor", createDoctor);
router.post("/displayDoctor/:id", displayDoctor);
router.post("/updateDoctor/:id", updateDoctor);
router.post("/deleteDoctor/:id", deleteDoctor);

export default router;
