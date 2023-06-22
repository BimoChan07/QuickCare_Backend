import express from "express";
import { createUser } from "../controller/user.controller.js";

const router = express.Router();
router.use(express.json());
router.post("/createUser", createUser);

export default router;
