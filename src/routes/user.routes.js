import express from "express";
import { createUser, updateUser } from "../controller/user.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createUser", createUser);
router.post("/updateUser", updateUser);

export default router;
