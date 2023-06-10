import express from "express";
import { createDisease } from "../controller/disease.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createDisease", createDisease);

export default router;
