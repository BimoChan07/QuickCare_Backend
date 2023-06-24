import express from "express";
import {
  createUser,
  updateUser,
  displayUser,
  deleteUser,
} from "../controller/user.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createUser", createUser);
router.post("/displayUser/:id", displayUser);
router.post("/updateUser/:id", updateUser);
router.post("/deleteUser/:id", deleteUser);

export default router;
