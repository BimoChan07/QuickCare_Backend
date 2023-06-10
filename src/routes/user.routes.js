import express from "express";
import { createUser } from "../controller/user.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createUser", createUser);
// router.post("/register", createUser);

export default router;
