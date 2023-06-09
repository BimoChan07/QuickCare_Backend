import express from "express";

const router = express.Router();
router.use(express.json());
router.post("/createUser", createUser);
// router.post("/register", createUser);
import { createUser } from "../controller/user.controller.js";

export default router;
