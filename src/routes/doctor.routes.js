import express from "express";
import { createDoctor } from "../controller/doctor.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createDoctor", createDoctor);

export default router;
