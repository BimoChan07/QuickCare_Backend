import express from "express";

const router = express.Router();
router.use(express.json());
router.post("/createDoctor", createDoctor);

import { createDoctor } from "../controller/doctor.controller";

export default router;
