import express from "express";
import {
  createDisease,
  displayDisease,
  updateDisease,
  deleteDisease,
} from "../controller/disease.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createDisease", createDisease);
router.post("/displayDisease/:id", displayDisease);
router.post("/updateDisease/:id", updateDisease);
router.post("/deleteDisease/:id", deleteDisease);

export default router;
